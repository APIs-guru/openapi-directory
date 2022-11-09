import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListingsByDealerListingsGetQueryParams extends SpeakeasyBase {
    dealerId: number;
    jwt: string;
    newCars?: boolean;
    page?: number;
}
export declare class GetListingsByDealerListingsGetRequest extends SpeakeasyBase {
    queryParams: GetListingsByDealerListingsGetQueryParams;
}
export declare class GetListingsByDealerListingsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    listingResp?: shared.ListingResp;
    statusCode: number;
}
