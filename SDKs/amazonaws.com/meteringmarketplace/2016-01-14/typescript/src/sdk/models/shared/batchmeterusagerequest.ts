import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageRecord } from "./usagerecord";


// BatchMeterUsageRequest
/** 
 * A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
**/
export class BatchMeterUsageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductCode" })
  productCode: string;

  @Metadata({ data: "json, name=UsageRecords", elemType: shared.UsageRecord })
  usageRecords: UsageRecord[];
}
