import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum IssuesListForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}
export declare enum IssuesListForRepoStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListForRepoQueryParams extends SpeakeasyBase {
    assignee?: string;
    creator?: string;
    direction?: shared.DirectionEnum;
    labels?: string;
    mentioned?: string;
    milestone?: string;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: IssuesListForRepoSortEnum;
    state?: IssuesListForRepoStateEnum;
}
export declare class IssuesListForRepoRequest extends SpeakeasyBase {
    pathParams: IssuesListForRepoPathParams;
    queryParams: IssuesListForRepoQueryParams;
}
export declare class IssuesListForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issueSimples?: shared.IssueSimple[];
    validationError?: shared.ValidationError;
}
