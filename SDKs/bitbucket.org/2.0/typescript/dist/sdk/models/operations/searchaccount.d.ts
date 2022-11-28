import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchAccountPathParams extends SpeakeasyBase {
    username: string;
}
export declare class SearchAccountQueryParams extends SpeakeasyBase {
    page?: number;
    pagelen?: number;
    searchQuery: string;
}
export declare class SearchAccountRequest extends SpeakeasyBase {
    pathParams: SearchAccountPathParams;
    queryParams: SearchAccountQueryParams;
}
export declare class SearchAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    searchResultPage?: shared.SearchResultPage;
}
