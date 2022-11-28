import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RejectResourceShareInvitationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class RejectResourceShareInvitationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareInvitationArn" })
  resourceShareInvitationArn: string;
}


export class RejectResourceShareInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RejectResourceShareInvitationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RejectResourceShareInvitationRequestBody;
}


export class RejectResourceShareInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  invalidClientTokenException?: any;

  @SpeakeasyMetadata()
  malformedArnException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  rejectResourceShareInvitationResponse?: shared.RejectResourceShareInvitationResponse;

  @SpeakeasyMetadata()
  resourceShareInvitationAlreadyAcceptedException?: any;

  @SpeakeasyMetadata()
  resourceShareInvitationAlreadyRejectedException?: any;

  @SpeakeasyMetadata()
  resourceShareInvitationArnNotFoundException?: any;

  @SpeakeasyMetadata()
  resourceShareInvitationExpiredException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
