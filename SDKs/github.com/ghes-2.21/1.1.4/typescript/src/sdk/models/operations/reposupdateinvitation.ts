import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposUpdateInvitationRequestBodyPermissionsEnum {
    Read = "read",
    Write = "write",
    Maintain = "maintain",
    Triage = "triage",
    Admin = "admin"
}


export class ReposUpdateInvitationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: ReposUpdateInvitationRequestBodyPermissionsEnum;
}


export class ReposUpdateInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateInvitationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateInvitationRequestBody;
}


export class ReposUpdateInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  repositoryInvitation?: shared.RepositoryInvitation;
}
