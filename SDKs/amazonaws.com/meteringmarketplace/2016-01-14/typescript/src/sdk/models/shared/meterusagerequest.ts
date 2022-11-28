import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageAllocation } from "./usageallocation";



export class MeterUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProductCode" })
  productCode: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=UsageAllocations", elemType: UsageAllocation })
  usageAllocations?: UsageAllocation[];

  @SpeakeasyMetadata({ data: "json, name=UsageDimension" })
  usageDimension: string;

  @SpeakeasyMetadata({ data: "json, name=UsageQuantity" })
  usageQuantity?: number;
}
