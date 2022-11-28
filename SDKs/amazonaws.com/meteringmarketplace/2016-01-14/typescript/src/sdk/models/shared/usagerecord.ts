import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageAllocation } from "./usageallocation";



// UsageRecord
/** 
 * <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
**/
export class UsageRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerIdentifier" })
  customerIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=Dimension" })
  dimension: string;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=UsageAllocations", elemType: UsageAllocation })
  usageAllocations?: UsageAllocation[];
}
