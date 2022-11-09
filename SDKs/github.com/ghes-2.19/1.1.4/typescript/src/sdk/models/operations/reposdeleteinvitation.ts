import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDeleteInvitationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteInvitationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteInvitationPathParams;
}


export class ReposDeleteInvitationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
