import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum ProjectsListForRepoStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class ProjectsListForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: ProjectsListForRepoStateEnum;
}
export declare class ProjectsListForRepoRequest extends SpeakeasyBase {
    pathParams: ProjectsListForRepoPathParams;
    queryParams: ProjectsListForRepoQueryParams;
}
export declare class ProjectsListForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    projects?: shared.Project[];
    validationErrorSimple?: shared.ValidationErrorSimple;
}
