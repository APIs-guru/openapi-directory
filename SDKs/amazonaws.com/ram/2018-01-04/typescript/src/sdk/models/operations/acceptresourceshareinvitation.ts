import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AcceptResourceShareInvitationHeaders extends SpeakeasyBase {
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


export class AcceptResourceShareInvitationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=resourceShareInvitationArn" })
  resourceShareInvitationArn: string;
}


export class AcceptResourceShareInvitationRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptResourceShareInvitationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AcceptResourceShareInvitationRequestBody;
}


export class AcceptResourceShareInvitationResponse extends SpeakeasyBase {
  @Metadata()
  acceptResourceShareInvitationResponse?: shared.AcceptResourceShareInvitationResponse;

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
