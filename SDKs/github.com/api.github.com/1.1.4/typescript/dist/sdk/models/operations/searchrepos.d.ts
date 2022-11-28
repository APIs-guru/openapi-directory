import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchReposSortEnum {
    Stars = "stars",
    Forks = "forks",
    HelpWantedIssues = "help-wanted-issues",
    Updated = "updated"
}
export declare class SearchReposQueryParams extends SpeakeasyBase {
    order?: shared.OrderEnum;
    page?: number;
    perPage?: number;
    q: string;
    sort?: SearchReposSortEnum;
}
export declare class SearchRepos200ApplicationJson extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.RepoSearchResultItem[];
    totalCount: number;
}
export declare class SearchRepos503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SearchReposRequest extends SpeakeasyBase {
    queryParams: SearchReposQueryParams;
}
export declare class SearchReposResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchRepos200ApplicationJsonObject?: SearchRepos200ApplicationJson;
    searchRepos503ApplicationJsonObject?: SearchRepos503ApplicationJson;
    validationError?: shared.ValidationError;
}
