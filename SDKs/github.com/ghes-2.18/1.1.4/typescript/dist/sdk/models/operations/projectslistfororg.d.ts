import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum ProjectsListForOrgStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class ProjectsListForOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: ProjectsListForOrgStateEnum;
}
export declare class ProjectsListForOrgRequest extends SpeakeasyBase {
    pathParams: ProjectsListForOrgPathParams;
    queryParams: ProjectsListForOrgQueryParams;
}
export declare class ProjectsListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    projects?: shared.Project[];
    validationErrorSimple?: shared.ValidationErrorSimple;
}
