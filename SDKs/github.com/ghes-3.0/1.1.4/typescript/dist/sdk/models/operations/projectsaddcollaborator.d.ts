import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsAddCollaboratorPathParams extends SpeakeasyBase {
    projectId: number;
    username: string;
}
export declare enum ProjectsAddCollaboratorRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class ProjectsAddCollaboratorRequestBody extends SpeakeasyBase {
    permission?: ProjectsAddCollaboratorRequestBodyPermissionEnum;
}
export declare class ProjectsAddCollaborator415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsAddCollaboratorRequest extends SpeakeasyBase {
    pathParams: ProjectsAddCollaboratorPathParams;
    request?: ProjectsAddCollaboratorRequestBody;
}
export declare class ProjectsAddCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsAddCollaborator415ApplicationJsonObject?: ProjectsAddCollaborator415ApplicationJson;
    validationError?: shared.ValidationError;
}
