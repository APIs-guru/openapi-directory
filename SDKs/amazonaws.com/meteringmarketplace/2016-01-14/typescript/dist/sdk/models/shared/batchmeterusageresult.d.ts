import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageRecordResult } from "./usagerecordresult";
import { UsageRecord } from "./usagerecord";
/**
 * Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
**/
export declare class BatchMeterUsageResult extends SpeakeasyBase {
    results?: UsageRecordResult[];
    unprocessedRecords?: UsageRecord[];
}
