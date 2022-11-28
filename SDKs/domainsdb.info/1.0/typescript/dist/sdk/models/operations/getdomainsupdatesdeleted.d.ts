import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainsUpdatesDeletedQueryParams extends SpeakeasyBase {
    apiKey?: string;
    date?: string;
    limit?: number;
    page?: string;
}
export declare class GetDomainsUpdatesDeletedRequest extends SpeakeasyBase {
    queryParams: GetDomainsUpdatesDeletedQueryParams;
}
export declare class GetDomainsUpdatesDeletedResponse extends SpeakeasyBase {
    contentType: string;
    searchResults?: shared.SearchResults;
    statusCode: number;
}
