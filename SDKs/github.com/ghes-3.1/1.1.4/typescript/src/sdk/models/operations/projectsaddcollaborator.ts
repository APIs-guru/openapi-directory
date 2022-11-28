import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsAddCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ProjectsAddCollaboratorRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}


export class ProjectsAddCollaboratorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: ProjectsAddCollaboratorRequestBodyPermissionEnum;
}


export class ProjectsAddCollaborator415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsAddCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsAddCollaboratorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsAddCollaboratorRequestBody;
}


export class ProjectsAddCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectsAddCollaborator415ApplicationJsonObject?: ProjectsAddCollaborator415ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
