import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTldDomainItemPathParams extends SpeakeasyBase {
    zoneId: string;
}
export declare class GetTldDomainItemQueryParams extends SpeakeasyBase {
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
}
export declare class GetTldDomainItemRequest extends SpeakeasyBase {
    pathParams: GetTldDomainItemPathParams;
    queryParams: GetTldDomainItemQueryParams;
}
export declare class GetTldDomainItemResponse extends SpeakeasyBase {
    contentType: string;
    searchResults?: shared.SearchResults;
    statusCode: number;
}
