import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchDomainItemQueryParams extends SpeakeasyBase {
    a?: string;
    cname?: string;
    mx?: string;
    ns?: string;
    txt?: string;
    apiKey?: string;
    country?: string;
    date?: string;
    domain?: string;
    isDead?: boolean;
    limit?: number;
    page?: string;
    zone?: string;
}
export declare class GetSearchDomainItemRequest extends SpeakeasyBase {
    queryParams: GetSearchDomainItemQueryParams;
}
export declare class GetSearchDomainItemResponse extends SpeakeasyBase {
    contentType: string;
    searchResults?: shared.SearchResults;
    statusCode: number;
}
