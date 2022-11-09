import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
**/
export declare class UsageAllocation extends SpeakeasyBase {
    allocatedUsageQuantity: number;
    tags?: Tag[];
}
