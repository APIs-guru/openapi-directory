import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListingsByZipCodeListingsByZipCodeGetQueryParams extends SpeakeasyBase {
    jwt: string;
    modelName?: string;
    newCars?: boolean;
    page?: number;
    zipCode: number;
}
export declare class ListingsByZipCodeListingsByZipCodeGetRequest extends SpeakeasyBase {
    queryParams: ListingsByZipCodeListingsByZipCodeGetQueryParams;
}
export declare class ListingsByZipCodeListingsByZipCodeGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    listingResp?: shared.ListingResp;
    statusCode: number;
}
