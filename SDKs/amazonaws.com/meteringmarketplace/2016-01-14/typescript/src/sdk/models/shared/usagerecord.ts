import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageAllocation } from "./usageallocation";


// UsageRecord
/** 
 * <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
**/
export class UsageRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomerIdentifier" })
  customerIdentifier: string;

  @Metadata({ data: "json, name=Dimension" })
  dimension: string;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=UsageAllocations", elemType: shared.UsageAllocation })
  usageAllocations?: UsageAllocation[];
}
