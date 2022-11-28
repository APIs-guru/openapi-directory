import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListColumnsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectsListColumnsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ProjectsListColumnsRequest extends SpeakeasyBase {
    pathParams: ProjectsListColumnsPathParams;
    queryParams: ProjectsListColumnsQueryParams;
}
export declare class ProjectsListColumnsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    projectColumns?: shared.ProjectColumn[];
}
