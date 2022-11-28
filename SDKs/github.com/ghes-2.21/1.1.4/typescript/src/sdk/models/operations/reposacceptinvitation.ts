import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposAcceptInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;
}


export class ReposAcceptInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposAcceptInvitationPathParams;
}


export class ReposAcceptInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
