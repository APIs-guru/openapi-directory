import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingRvIdExtraPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingRvIdExtraQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingRvIdExtraRequest extends SpeakeasyBase {
    pathParams: GetListingRvIdExtraPathParams;
    queryParams: GetListingRvIdExtraQueryParams;
}
export declare class GetListingRvIdExtraResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingExtraAttributes?: shared.ListingExtraAttributes;
    statusCode: number;
}
