import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum PullsListDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum PullsListSortEnum {
    Created = "created",
    Updated = "updated",
    Popularity = "popularity",
    LongRunning = "long-running"
}
export declare enum PullsListStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class PullsListQueryParams extends SpeakeasyBase {
    base?: string;
    direction?: PullsListDirectionEnum;
    head?: string;
    page?: number;
    perPage?: number;
    sort?: PullsListSortEnum;
    state?: PullsListStateEnum;
}
export declare class PullsListRequest extends SpeakeasyBase {
    pathParams: PullsListPathParams;
    queryParams: PullsListQueryParams;
}
export declare class PullsListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    pullRequestSimples?: shared.PullRequestSimple[];
    validationError?: shared.ValidationError;
}
