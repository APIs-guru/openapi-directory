import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
    body?: string;
    name: string;
}
export declare class ProjectsCreateForAuthenticatedUser415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsCreateForAuthenticatedUserRequest extends SpeakeasyBase {
    request?: ProjectsCreateForAuthenticatedUserRequestBody;
}
export declare class ProjectsCreateForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    project?: shared.Project;
    projectsCreateForAuthenticatedUser415ApplicationJsonObject?: ProjectsCreateForAuthenticatedUser415ApplicationJson;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
