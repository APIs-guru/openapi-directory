import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDomainsTldZoneIdSearchPathParams extends SpeakeasyBase {
    zoneId: string;
}
export declare class GetDomainsTldZoneIdSearchQueryParams extends SpeakeasyBase {
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
export declare class GetDomainsTldZoneIdSearchRequest extends SpeakeasyBase {
    pathParams: GetDomainsTldZoneIdSearchPathParams;
    queryParams: GetDomainsTldZoneIdSearchQueryParams;
}
export declare class GetDomainsTldZoneIdSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResults?: shared.SearchResults;
    statusCode: number;
}
