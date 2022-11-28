import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealItemsQueryParams extends SpeakeasyBase {
    categoryIds?: string;
    commissionable?: string;
    deliveryCountry?: string;
    limit?: string;
    offset?: string;
}
export declare class GetDealItemsHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetDealItemsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetDealItemsRequest extends SpeakeasyBase {
    queryParams: GetDealItemsQueryParams;
    headers: GetDealItemsHeaders;
    security: GetDealItemsSecurity;
}
export declare class GetDealItemsResponse extends SpeakeasyBase {
    contentType: string;
    dealItemSearchResponse?: shared.DealItemSearchResponse;
    statusCode: number;
}
