import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchIssuesAndPullRequestsSortEnum {
    Comments = "comments",
    Reactions = "reactions",
    ReactionsPlus1 = "reactions-+1",
    Reactions1 = "reactions--1",
    ReactionsSmile = "reactions-smile",
    ReactionsThinkingFace = "reactions-thinking_face",
    ReactionsHeart = "reactions-heart",
    ReactionsTada = "reactions-tada",
    Interactions = "interactions",
    Created = "created",
    Updated = "updated"
}
export declare class SearchIssuesAndPullRequestsQueryParams extends SpeakeasyBase {
    order?: shared.OrderEnum;
    page?: number;
    perPage?: number;
    q: string;
    sort?: SearchIssuesAndPullRequestsSortEnum;
}
export declare class SearchIssuesAndPullRequests200ApplicationJson extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.IssueSearchResultItem[];
    totalCount: number;
}
export declare class SearchIssuesAndPullRequests503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SearchIssuesAndPullRequestsRequest extends SpeakeasyBase {
    queryParams: SearchIssuesAndPullRequestsQueryParams;
}
export declare class SearchIssuesAndPullRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    searchIssuesAndPullRequests200ApplicationJsonObject?: SearchIssuesAndPullRequests200ApplicationJson;
    searchIssuesAndPullRequests503ApplicationJsonObject?: SearchIssuesAndPullRequests503ApplicationJson;
    validationError?: shared.ValidationError;
}
