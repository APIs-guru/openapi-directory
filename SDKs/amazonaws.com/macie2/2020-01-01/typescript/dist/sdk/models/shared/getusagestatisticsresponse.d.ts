import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecord } from "./usagerecord";
import { TimeRangeEnum } from "./timerangeenum";
export declare class GetUsageStatisticsResponse extends SpeakeasyBase {
    nextToken?: string;
    records?: UsageRecord[];
    timeRange?: TimeRangeEnum;
}
