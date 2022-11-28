import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarAuctionIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarAuctionIdMediaQueryParams extends SpeakeasyBase {
    apiKey?: string;
    appendApiKey?: boolean;
}
export declare class GetListingCarAuctionIdMediaRequest extends SpeakeasyBase {
    pathParams: GetListingCarAuctionIdMediaPathParams;
    queryParams: GetListingCarAuctionIdMediaQueryParams;
}
export declare class GetListingCarAuctionIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingMedia?: shared.ListingMedia;
    statusCode: number;
}
