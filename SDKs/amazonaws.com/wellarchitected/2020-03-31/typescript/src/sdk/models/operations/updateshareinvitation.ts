import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateShareInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ShareInvitationId" })
  shareInvitationId: string;
}


export class UpdateShareInvitationHeaders extends SpeakeasyBase {
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

export enum UpdateShareInvitationRequestBodyShareInvitationActionEnum {
    Accept = "ACCEPT",
    Reject = "REJECT"
}


export class UpdateShareInvitationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShareInvitationAction" })
  shareInvitationAction: UpdateShareInvitationRequestBodyShareInvitationActionEnum;
}


export class UpdateShareInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateShareInvitationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateShareInvitationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateShareInvitationRequestBody;
}


export class UpdateShareInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateShareInvitationOutput?: shared.UpdateShareInvitationOutput;

  @SpeakeasyMetadata()
  validationException?: any;
}
