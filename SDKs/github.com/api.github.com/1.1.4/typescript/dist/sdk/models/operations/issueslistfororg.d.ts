import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum IssuesListForOrgFilterEnum {
    Assigned = "assigned",
    Created = "created",
    Mentioned = "mentioned",
    Subscribed = "subscribed",
    Repos = "repos",
    All = "all"
}
export declare enum IssuesListForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}
export declare enum IssuesListForOrgStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListForOrgQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    filter?: IssuesListForOrgFilterEnum;
    labels?: string;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: IssuesListForOrgSortEnum;
    state?: IssuesListForOrgStateEnum;
}
export declare class IssuesListForOrgRequest extends SpeakeasyBase {
    pathParams: IssuesListForOrgPathParams;
    queryParams: IssuesListForOrgQueryParams;
}
export declare class IssuesListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issues?: shared.Issue[];
}
