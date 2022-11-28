import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams extends SpeakeasyBase {
    endDate: Date;
    jwt: string;
    modelName?: string;
    newCars?: boolean;
    page?: number;
    startDate: Date;
    zipCode: number;
}
export declare class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest extends SpeakeasyBase {
    queryParams: ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams;
}
export declare class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    listingResp?: shared.ListingResp;
    statusCode: number;
}
