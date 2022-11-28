import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchUsersSortEnum {
    Followers = "followers",
    Repositories = "repositories",
    Joined = "joined"
}
export declare class SearchUsersQueryParams extends SpeakeasyBase {
    order?: shared.OrderEnum;
    page?: number;
    perPage?: number;
    q: string;
    sort?: SearchUsersSortEnum;
}
export declare class SearchUsers200ApplicationJson extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.UserSearchResultItem[];
    totalCount: number;
}
export declare class SearchUsers503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SearchUsersRequest extends SpeakeasyBase {
    queryParams: SearchUsersQueryParams;
}
export declare class SearchUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchUsers200ApplicationJsonObject?: SearchUsers200ApplicationJson;
    searchUsers503ApplicationJsonObject?: SearchUsers503ApplicationJson;
    validationError?: shared.ValidationError;
}
