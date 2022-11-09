import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListingsByRegionListingsByRegionGetQueryParams extends SpeakeasyBase {
    daysBack?: number;
    jwt: string;
    modelName: string;
    newCars?: boolean;
    page?: number;
    regionName: string;
}
export declare class GetListingsByRegionListingsByRegionGetRequest extends SpeakeasyBase {
    queryParams: GetListingsByRegionListingsByRegionGetQueryParams;
}
export declare class GetListingsByRegionListingsByRegionGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    listingResp?: shared.ListingResp;
    statusCode: number;
}
