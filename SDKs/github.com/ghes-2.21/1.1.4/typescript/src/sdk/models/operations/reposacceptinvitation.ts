import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposAcceptInvitationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;
}


export class ReposAcceptInvitationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposAcceptInvitationPathParams;
}


export class ReposAcceptInvitationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
