import { SpeakeasyBase } from "../../../internal/utils";
import { UsageAllocation } from "./usageallocation";
export declare class MeterUsageRequest extends SpeakeasyBase {
    dryRun?: boolean;
    productCode: string;
    timestamp: Date;
    usageAllocations?: UsageAllocation[];
    usageDimension: string;
    usageQuantity?: number;
}
