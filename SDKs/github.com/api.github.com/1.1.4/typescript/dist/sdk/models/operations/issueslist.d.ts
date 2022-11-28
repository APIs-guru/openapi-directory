import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IssuesListFilterEnum {
    Assigned = "assigned",
    Created = "created",
    Mentioned = "mentioned",
    Subscribed = "subscribed",
    Repos = "repos",
    All = "all"
}
export declare enum IssuesListSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}
export declare enum IssuesListStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListQueryParams extends SpeakeasyBase {
    collab?: boolean;
    direction?: shared.DirectionEnum;
    filter?: IssuesListFilterEnum;
    labels?: string;
    orgs?: boolean;
    owned?: boolean;
    page?: number;
    perPage?: number;
    pulls?: boolean;
    since?: string;
    sort?: IssuesListSortEnum;
    state?: IssuesListStateEnum;
}
export declare class IssuesListRequest extends SpeakeasyBase {
    queryParams: IssuesListQueryParams;
}
export declare class IssuesListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issues?: shared.Issue[];
    validationError?: shared.ValidationError;
}
