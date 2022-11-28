import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarIdExtraPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarIdExtraQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingCarIdExtraRequest extends SpeakeasyBase {
    pathParams: GetListingCarIdExtraPathParams;
    queryParams: GetListingCarIdExtraQueryParams;
}
export declare class GetListingCarIdExtraResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingExtraAttributes?: shared.ListingExtraAttributes;
    statusCode: number;
}
