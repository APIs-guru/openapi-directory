import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersSelectedUserSearchCodePathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class GetUsersSelectedUserSearchCodeQueryParams extends SpeakeasyBase {
    page?: number;
    pagelen?: number;
    searchQuery: string;
}
export declare class GetUsersSelectedUserSearchCodeRequest extends SpeakeasyBase {
    pathParams: GetUsersSelectedUserSearchCodePathParams;
    queryParams: GetUsersSelectedUserSearchCodeQueryParams;
}
export declare class GetUsersSelectedUserSearchCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    searchResultPage?: shared.SearchResultPage;
}
