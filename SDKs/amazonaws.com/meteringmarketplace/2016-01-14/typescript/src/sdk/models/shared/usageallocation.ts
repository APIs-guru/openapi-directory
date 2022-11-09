import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// UsageAllocation
/** 
 * <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
**/
export class UsageAllocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedUsageQuantity" })
  allocatedUsageQuantity: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
