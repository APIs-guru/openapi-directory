import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchCommitsSortEnum {
    AuthorDate = "author-date",
    CommitterDate = "committer-date"
}
export declare class SearchCommitsQueryParams extends SpeakeasyBase {
    order?: shared.OrderEnum;
    page?: number;
    perPage?: number;
    q: string;
    sort?: SearchCommitsSortEnum;
}
export declare class SearchCommits200ApplicationJson extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.CommitSearchResultItem[];
    totalCount: number;
}
export declare class SearchCommits415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class SearchCommitsRequest extends SpeakeasyBase {
    queryParams: SearchCommitsQueryParams;
}
export declare class SearchCommitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchCommits200ApplicationJsonObject?: SearchCommits200ApplicationJson;
    searchCommits415ApplicationJsonObject?: SearchCommits415ApplicationJson;
}
