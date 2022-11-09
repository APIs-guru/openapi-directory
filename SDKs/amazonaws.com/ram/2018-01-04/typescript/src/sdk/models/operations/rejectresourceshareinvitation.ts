import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RejectResourceShareInvitationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class RejectResourceShareInvitationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=resourceShareInvitationArn" })
  resourceShareInvitationArn: string;
}


export class RejectResourceShareInvitationRequest extends SpeakeasyBase {
  @Metadata()
  headers: RejectResourceShareInvitationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RejectResourceShareInvitationRequestBody;
}


export class RejectResourceShareInvitationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidClientTokenException?: any;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  rejectResourceShareInvitationResponse?: shared.RejectResourceShareInvitationResponse;

  @Metadata()
  resourceShareInvitationAlreadyAcceptedException?: any;

  @Metadata()
  resourceShareInvitationAlreadyRejectedException?: any;

  @Metadata()
  resourceShareInvitationArnNotFoundException?: any;

  @Metadata()
  resourceShareInvitationExpiredException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
