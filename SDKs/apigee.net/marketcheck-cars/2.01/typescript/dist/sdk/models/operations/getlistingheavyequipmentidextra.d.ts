import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingHeavyEquipmentIdExtraPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingHeavyEquipmentIdExtraQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingHeavyEquipmentIdExtraRequest extends SpeakeasyBase {
    pathParams: GetListingHeavyEquipmentIdExtraPathParams;
    queryParams: GetListingHeavyEquipmentIdExtraQueryParams;
}
export declare class GetListingHeavyEquipmentIdExtraResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingExtraAttributes?: shared.ListingExtraAttributes;
    statusCode: number;
}
