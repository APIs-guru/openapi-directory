import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealersGetDealersByRegionGetQueryParams extends SpeakeasyBase {
    jwt: string;
    page?: number;
    regionName?: string;
}
export declare class GetDealersGetDealersByRegionGetRequest extends SpeakeasyBase {
    queryParams: GetDealersGetDealersByRegionGetQueryParams;
}
export declare class GetDealersGetDealersByRegionGetResponse extends SpeakeasyBase {
    contentType: string;
    dealershipDataPaginatedResp?: shared.DealershipDataPaginatedResp;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
