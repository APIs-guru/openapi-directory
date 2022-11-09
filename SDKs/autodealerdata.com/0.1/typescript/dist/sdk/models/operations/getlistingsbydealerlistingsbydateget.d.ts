import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListingsByDealerListingsByDateGetQueryParams extends SpeakeasyBase {
    dealerId: number;
    endDate: Date;
    jwt: string;
    newCars?: boolean;
    page?: number;
    startDate: Date;
}
export declare class GetListingsByDealerListingsByDateGetRequest extends SpeakeasyBase {
    queryParams: GetListingsByDealerListingsByDateGetQueryParams;
}
export declare class GetListingsByDealerListingsByDateGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    listingResp?: shared.ListingResp;
    statusCode: number;
}
