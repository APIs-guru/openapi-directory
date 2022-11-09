import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageAllocation } from "./usageallocation";


export class MeterUsageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=ProductCode" })
  productCode: string;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=UsageAllocations", elemType: shared.UsageAllocation })
  usageAllocations?: UsageAllocation[];

  @Metadata({ data: "json, name=UsageDimension" })
  usageDimension: string;

  @Metadata({ data: "json, name=UsageQuantity" })
  usageQuantity?: number;
}
