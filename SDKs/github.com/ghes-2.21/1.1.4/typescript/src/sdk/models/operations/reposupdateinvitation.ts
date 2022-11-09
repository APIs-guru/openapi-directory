import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateInvitationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposUpdateInvitationRequestBodyPermissionsEnum {
    Read = "read"
,    Write = "write"
,    Maintain = "maintain"
,    Triage = "triage"
,    Admin = "admin"
}


export class ReposUpdateInvitationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: ReposUpdateInvitationRequestBodyPermissionsEnum;
}


export class ReposUpdateInvitationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdateInvitationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateInvitationRequestBody;
}


export class ReposUpdateInvitationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  repositoryInvitation?: shared.RepositoryInvitation;
}
