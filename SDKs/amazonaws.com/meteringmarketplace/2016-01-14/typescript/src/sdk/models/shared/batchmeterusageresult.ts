import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageRecordResult } from "./usagerecordresult";
import { UsageRecord } from "./usagerecord";


// BatchMeterUsageResult
/** 
 * Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
**/
export class BatchMeterUsageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Results", elemType: shared.UsageRecordResult })
  results?: UsageRecordResult[];

  @Metadata({ data: "json, name=UnprocessedRecords", elemType: shared.UsageRecord })
  unprocessedRecords?: UsageRecord[];
}
