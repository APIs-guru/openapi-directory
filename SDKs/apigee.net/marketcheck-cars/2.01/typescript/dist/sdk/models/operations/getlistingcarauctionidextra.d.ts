import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarAuctionIdExtraPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarAuctionIdExtraQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingCarAuctionIdExtraRequest extends SpeakeasyBase {
    pathParams: GetListingCarAuctionIdExtraPathParams;
    queryParams: GetListingCarAuctionIdExtraQueryParams;
}
export declare class GetListingCarAuctionIdExtraResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingExtraAttributes?: shared.ListingExtraAttributes;
    statusCode: number;
}
