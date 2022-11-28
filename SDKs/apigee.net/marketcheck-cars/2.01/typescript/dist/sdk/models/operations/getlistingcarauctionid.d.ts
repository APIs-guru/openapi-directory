import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarAuctionIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarAuctionIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
    appendApiKey?: boolean;
    includeRelevantLinks?: boolean;
}
export declare class GetListingCarAuctionIdRequest extends SpeakeasyBase {
    pathParams: GetListingCarAuctionIdPathParams;
    queryParams: GetListingCarAuctionIdQueryParams;
}
export declare class GetListingCarAuctionIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listing?: shared.Listing;
    statusCode: number;
}
