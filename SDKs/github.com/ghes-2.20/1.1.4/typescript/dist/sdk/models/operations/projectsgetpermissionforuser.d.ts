import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsGetPermissionForUserPathParams extends SpeakeasyBase {
    projectId: number;
    username: string;
}
export declare class ProjectsGetPermissionForUser415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsGetPermissionForUserRequest extends SpeakeasyBase {
    pathParams: ProjectsGetPermissionForUserPathParams;
}
export declare class ProjectsGetPermissionForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsGetPermissionForUser415ApplicationJsonObject?: ProjectsGetPermissionForUser415ApplicationJson;
    repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;
    validationError?: shared.ValidationError;
}
