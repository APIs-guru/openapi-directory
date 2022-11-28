import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageRecord } from "./usagerecord";



// BatchMeterUsageRequest
/** 
 * A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
**/
export class BatchMeterUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductCode" })
  productCode: string;

  @SpeakeasyMetadata({ data: "json, name=UsageRecords", elemType: UsageRecord })
  usageRecords: UsageRecord[];
}
