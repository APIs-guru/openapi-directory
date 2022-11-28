import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsUpdatePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare enum ProjectsUpdateRequestBodyOrganizationPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}
export declare class ProjectsUpdateRequestBody extends SpeakeasyBase {
    body?: string;
    name?: string;
    organizationPermission?: ProjectsUpdateRequestBodyOrganizationPermissionEnum;
    private?: boolean;
    state?: string;
}
export declare class ProjectsUpdate403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: string[];
    message?: string;
}
export declare class ProjectsUpdateRequest extends SpeakeasyBase {
    pathParams: ProjectsUpdatePathParams;
    request?: ProjectsUpdateRequestBody;
}
export declare class ProjectsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    project?: shared.Project;
    projectsUpdate403ApplicationJsonObject?: ProjectsUpdate403ApplicationJson;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
