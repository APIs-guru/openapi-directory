import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProductAvailabilityChangeEventAvailabilityStatusEnum {
    Unknown = "unknown"
,    Available = "available"
,    Removed = "removed"
,    Unpublished = "unpublished"
}


// ProductAvailabilityChangeEvent
/** 
 * An event generated whenever a product's availability changes.
**/
export class ProductAvailabilityChangeEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilityStatus" })
  availabilityStatus?: ProductAvailabilityChangeEventAvailabilityStatusEnum;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
