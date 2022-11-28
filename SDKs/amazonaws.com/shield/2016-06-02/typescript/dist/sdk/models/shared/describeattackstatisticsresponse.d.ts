import { SpeakeasyBase } from "../../../internal/utils";
import { AttackStatisticsDataItem } from "./attackstatisticsdataitem";
import { TimeRange } from "./timerange";
export declare class DescribeAttackStatisticsResponse extends SpeakeasyBase {
    dataItems: AttackStatisticsDataItem[];
    timeRange: TimeRange;
}
