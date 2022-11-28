import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// UsageAllocation
/** 
 * <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
**/
export class UsageAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedUsageQuantity" })
  allocatedUsageQuantity: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
