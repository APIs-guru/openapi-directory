import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainsUpdatesAddedQueryParams extends SpeakeasyBase {
    apiKey?: string;
    date?: string;
    limit?: number;
    page?: string;
}
export declare class GetDomainsUpdatesAddedRequest extends SpeakeasyBase {
    queryParams: GetDomainsUpdatesAddedQueryParams;
}
export declare class GetDomainsUpdatesAddedResponse extends SpeakeasyBase {
    contentType: string;
    searchResults?: shared.SearchResults;
    statusCode: number;
}
