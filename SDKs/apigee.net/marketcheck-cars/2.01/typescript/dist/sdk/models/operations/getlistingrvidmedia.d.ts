import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingRvIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingRvIdMediaQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingRvIdMediaRequest extends SpeakeasyBase {
    pathParams: GetListingRvIdMediaPathParams;
    queryParams: GetListingRvIdMediaQueryParams;
}
export declare class GetListingRvIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingMedia?: shared.ListingMedia;
    statusCode: number;
}
