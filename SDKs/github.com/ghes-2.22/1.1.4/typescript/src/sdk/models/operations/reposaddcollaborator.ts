import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposAddCollaboratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ReposAddCollaboratorRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
,    Maintain = "maintain"
,    Triage = "triage"
}


export class ReposAddCollaboratorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: ReposAddCollaboratorRequestBodyPermissionEnum;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string;
}


export class ReposAddCollaboratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposAddCollaboratorPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposAddCollaboratorRequestBody;
}


export class ReposAddCollaboratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  repositoryInvitation?: shared.RepositoryInvitation;

  @Metadata()
  validationError?: shared.ValidationError;
}
