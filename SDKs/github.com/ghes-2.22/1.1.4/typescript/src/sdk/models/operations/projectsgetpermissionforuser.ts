import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsGetPermissionForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ProjectsGetPermissionForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsGetPermissionForUserPathParams;
}


export class ProjectsGetPermissionForUser415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsGetPermissionForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectsGetPermissionForUser415ApplicationJsonObject?: ProjectsGetPermissionForUser415ApplicationJson;

  @Metadata()
  repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;

  @Metadata()
  validationError?: shared.ValidationError;
}
