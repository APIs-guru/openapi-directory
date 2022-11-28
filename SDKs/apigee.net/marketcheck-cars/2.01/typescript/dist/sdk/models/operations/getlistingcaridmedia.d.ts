import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarIdMediaQueryParams extends SpeakeasyBase {
    apiKey?: string;
    appendApiKey?: boolean;
}
export declare class GetListingCarIdMediaRequest extends SpeakeasyBase {
    pathParams: GetListingCarIdMediaPathParams;
    queryParams: GetListingCarIdMediaQueryParams;
}
export declare class GetListingCarIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingMedia?: shared.ListingMedia;
    statusCode: number;
}
