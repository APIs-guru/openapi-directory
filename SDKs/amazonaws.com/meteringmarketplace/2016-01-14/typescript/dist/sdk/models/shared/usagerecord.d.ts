import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageAllocation } from "./usageallocation";
/**
 * <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
**/
export declare class UsageRecord extends SpeakeasyBase {
    customerIdentifier: string;
    dimension: string;
    quantity?: number;
    timestamp: Date;
    usageAllocations?: UsageAllocation[];
}
