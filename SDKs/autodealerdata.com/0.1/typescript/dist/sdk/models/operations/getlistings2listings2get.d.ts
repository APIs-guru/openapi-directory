import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListings2Listings2GetQueryParams extends SpeakeasyBase {
    brandName?: string;
    daysBack?: number;
    dealerId?: number;
    endDate?: Date;
    extendedSearch?: boolean;
    jwt: string;
    modelName?: string;
    modelYear?: number;
    newCars?: boolean;
    page?: number;
    regionName?: string;
    startDate?: Date;
    zipCode?: number;
}
export declare class GetListings2Listings2GetRequest extends SpeakeasyBase {
    queryParams: GetListings2Listings2GetQueryParams;
}
export declare class GetListings2Listings2GetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    listingResp?: shared.ListingResp;
    statusCode: number;
}
