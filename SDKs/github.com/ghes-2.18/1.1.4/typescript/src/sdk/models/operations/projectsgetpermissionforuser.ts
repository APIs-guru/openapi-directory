import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsGetPermissionForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ProjectsGetPermissionForUser415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsGetPermissionForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsGetPermissionForUserPathParams;
}


export class ProjectsGetPermissionForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectsGetPermissionForUser415ApplicationJsonObject?: ProjectsGetPermissionForUser415ApplicationJson;

  @SpeakeasyMetadata()
  repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
