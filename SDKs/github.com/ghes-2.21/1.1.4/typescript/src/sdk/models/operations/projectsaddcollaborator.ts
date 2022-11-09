import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsAddCollaboratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ProjectsAddCollaboratorRequestBodyPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}


export class ProjectsAddCollaboratorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: ProjectsAddCollaboratorRequestBodyPermissionEnum;
}


export class ProjectsAddCollaboratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsAddCollaboratorPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsAddCollaboratorRequestBody;
}


export class ProjectsAddCollaborator415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsAddCollaboratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectsAddCollaborator415ApplicationJsonObject?: ProjectsAddCollaborator415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
