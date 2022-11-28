import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingHeavyEquipmentIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingHeavyEquipmentIdMediaQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingHeavyEquipmentIdMediaRequest extends SpeakeasyBase {
    pathParams: GetListingHeavyEquipmentIdMediaPathParams;
    queryParams: GetListingHeavyEquipmentIdMediaQueryParams;
}
export declare class GetListingHeavyEquipmentIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingMedia?: shared.ListingMedia;
    statusCode: number;
}
