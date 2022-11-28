import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposDeclineInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;
}


export class ReposDeclineInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDeclineInvitationPathParams;
}


export class ReposDeclineInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
