import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecord } from "./usagerecord";
/**
 * A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
**/
export declare class BatchMeterUsageRequest extends SpeakeasyBase {
    productCode: string;
    usageRecords: UsageRecord[];
}
