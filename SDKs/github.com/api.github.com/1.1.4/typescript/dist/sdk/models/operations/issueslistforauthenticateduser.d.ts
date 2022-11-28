import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IssuesListForAuthenticatedUserFilterEnum {
    Assigned = "assigned",
    Created = "created",
    Mentioned = "mentioned",
    Subscribed = "subscribed",
    Repos = "repos",
    All = "all"
}
export declare enum IssuesListForAuthenticatedUserSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}
export declare enum IssuesListForAuthenticatedUserStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListForAuthenticatedUserQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    filter?: IssuesListForAuthenticatedUserFilterEnum;
    labels?: string;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: IssuesListForAuthenticatedUserSortEnum;
    state?: IssuesListForAuthenticatedUserStateEnum;
}
export declare class IssuesListForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: IssuesListForAuthenticatedUserQueryParams;
}
export declare class IssuesListForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issues?: shared.Issue[];
}
