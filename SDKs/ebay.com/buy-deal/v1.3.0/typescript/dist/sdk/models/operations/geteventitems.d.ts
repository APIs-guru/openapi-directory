import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventItemsQueryParams extends SpeakeasyBase {
    categoryIds?: string;
    deliveryCountry?: string;
    eventIds: string;
    limit?: string;
    offset?: string;
}
export declare class GetEventItemsHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetEventItemsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetEventItemsRequest extends SpeakeasyBase {
    queryParams: GetEventItemsQueryParams;
    headers: GetEventItemsHeaders;
    security: GetEventItemsSecurity;
}
export declare class GetEventItemsResponse extends SpeakeasyBase {
    contentType: string;
    eventItemSearchResponse?: shared.EventItemSearchResponse;
    statusCode: number;
}
