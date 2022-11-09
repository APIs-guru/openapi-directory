import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateShareInvitationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ShareInvitationId" })
  shareInvitationId: string;
}


export class UpdateShareInvitationHeaders extends SpeakeasyBase {
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

export enum UpdateShareInvitationRequestBodyShareInvitationActionEnum {
    Accept = "ACCEPT"
,    Reject = "REJECT"
}


export class UpdateShareInvitationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShareInvitationAction" })
  shareInvitationAction: UpdateShareInvitationRequestBodyShareInvitationActionEnum;
}


export class UpdateShareInvitationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateShareInvitationPathParams;

  @Metadata()
  headers: UpdateShareInvitationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateShareInvitationRequestBody;
}


export class UpdateShareInvitationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateShareInvitationOutput?: shared.UpdateShareInvitationOutput;

  @Metadata()
  validationException?: any;
}
