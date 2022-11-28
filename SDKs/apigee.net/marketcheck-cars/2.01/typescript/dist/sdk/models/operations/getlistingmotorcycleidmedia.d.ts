import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingMotorcycleIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingMotorcycleIdMediaQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingMotorcycleIdMediaRequest extends SpeakeasyBase {
    pathParams: GetListingMotorcycleIdMediaPathParams;
    queryParams: GetListingMotorcycleIdMediaQueryParams;
}
export declare class GetListingMotorcycleIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingMedia?: shared.ListingMedia;
    statusCode: number;
}
