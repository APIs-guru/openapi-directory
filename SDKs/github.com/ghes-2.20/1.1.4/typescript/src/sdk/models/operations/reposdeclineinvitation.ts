import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposDeclineInvitationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;
}


export class ReposDeclineInvitationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeclineInvitationPathParams;
}


export class ReposDeclineInvitationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
