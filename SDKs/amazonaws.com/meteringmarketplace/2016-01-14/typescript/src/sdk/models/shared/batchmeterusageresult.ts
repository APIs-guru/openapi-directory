import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordResult } from "./usagerecordresult";
import { UsageRecord } from "./usagerecord";



// BatchMeterUsageResult
/** 
 * Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
**/
export class BatchMeterUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Results", elemType: UsageRecordResult })
  results?: UsageRecordResult[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedRecords", elemType: UsageRecord })
  unprocessedRecords?: UsageRecord[];
}
