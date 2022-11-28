import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { StatisticSet } from "./statisticset";
import { UnitEnum } from "./unitenum";
/**
 * Internal only API.
**/
export declare class MetricDatum extends SpeakeasyBase {
    dimensions?: Dimension[];
    metricName: string;
    statisticValues?: StatisticSet;
    timestamp: Date;
    unit?: UnitEnum;
    value?: number;
}
