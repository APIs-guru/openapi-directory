import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
import { StandardUnitEnum } from "./standardunitenum";
/**
 * This structure defines the metric to be returned, along with the statistics, period, and units.
**/
export declare class MetricStat extends SpeakeasyBase {
    metric: Metric;
    period: number;
    stat: string;
    unit?: StandardUnitEnum;
}
