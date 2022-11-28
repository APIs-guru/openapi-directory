import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProductAvailabilityChangeEventAvailabilityStatusEnum {
    Unknown = "unknown",
    Available = "available",
    Removed = "removed",
    Unpublished = "unpublished"
}


// ProductAvailabilityChangeEvent
/** 
 * An event generated whenever a product's availability changes.
**/
export class ProductAvailabilityChangeEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilityStatus" })
  availabilityStatus?: ProductAvailabilityChangeEventAvailabilityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
