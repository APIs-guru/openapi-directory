import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposDeleteInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDeleteInvitationPathParams;
}


export class ReposDeleteInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
