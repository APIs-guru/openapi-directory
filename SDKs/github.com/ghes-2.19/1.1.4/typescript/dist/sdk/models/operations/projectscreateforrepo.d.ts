import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsCreateForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ProjectsCreateForRepoRequestBody extends SpeakeasyBase {
    body?: string;
    name: string;
}
export declare class ProjectsCreateForRepoRequest extends SpeakeasyBase {
    pathParams: ProjectsCreateForRepoPathParams;
    request?: ProjectsCreateForRepoRequestBody;
}
export declare class ProjectsCreateForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    project?: shared.Project;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
