import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordResultStatusEnum } from "./usagerecordresultstatusenum";
import { UsageRecord } from "./usagerecord";
/**
 * A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
**/
export declare class UsageRecordResult extends SpeakeasyBase {
    meteringRecordId?: string;
    status?: UsageRecordResultStatusEnum;
    usageRecord?: UsageRecord;
}
