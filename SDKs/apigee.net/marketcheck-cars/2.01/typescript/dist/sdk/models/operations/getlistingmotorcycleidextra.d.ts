import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingMotorcycleIdExtraPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingMotorcycleIdExtraQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingMotorcycleIdExtraRequest extends SpeakeasyBase {
    pathParams: GetListingMotorcycleIdExtraPathParams;
    queryParams: GetListingMotorcycleIdExtraQueryParams;
}
export declare class GetListingMotorcycleIdExtraResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingExtraAttributes?: shared.ListingExtraAttributes;
    statusCode: number;
}
