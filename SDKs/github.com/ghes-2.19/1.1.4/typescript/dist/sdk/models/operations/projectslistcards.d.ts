import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListCardsPathParams extends SpeakeasyBase {
    columnId: number;
}
export declare enum ProjectsListCardsArchivedStateEnum {
    All = "all",
    Archived = "archived",
    NotArchived = "not_archived"
}
export declare class ProjectsListCardsQueryParams extends SpeakeasyBase {
    archivedState?: ProjectsListCardsArchivedStateEnum;
    page?: number;
    perPage?: number;
}
export declare class ProjectsListCardsRequest extends SpeakeasyBase {
    pathParams: ProjectsListCardsPathParams;
    queryParams: ProjectsListCardsQueryParams;
}
export declare class ProjectsListCardsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    projectCards?: shared.ProjectCard[];
}
