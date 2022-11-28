import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams extends SpeakeasyBase {
    endDate: Date;
    jwt: string;
    modelName: string;
    newCars?: boolean;
    page?: number;
    regionName: string;
    startDate: Date;
}
export declare class GetListingsByRegionAndDateListingsByRegionAndDateGetRequest extends SpeakeasyBase {
    queryParams: GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams;
}
export declare class GetListingsByRegionAndDateListingsByRegionAndDateGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    listingResp?: shared.ListingResp;
    statusCode: number;
}
