import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductAvailabilityChangeEventAvailabilityStatusEnum {
    Unknown = "unknown",
    Available = "available",
    Removed = "removed",
    Unpublished = "unpublished"
}
/**
 * An event generated whenever a product's availability changes.
**/
export declare class ProductAvailabilityChangeEvent extends SpeakeasyBase {
    availabilityStatus?: ProductAvailabilityChangeEventAvailabilityStatusEnum;
    productId?: string;
}
