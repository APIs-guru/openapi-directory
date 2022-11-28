import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseMetricNameEnum } from "./relationaldatabasemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";
export declare class GetRelationalDatabaseMetricDataRequest extends SpeakeasyBase {
    endTime: Date;
    metricName: RelationalDatabaseMetricNameEnum;
    period: number;
    relationalDatabaseName: string;
    startTime: Date;
    statistics: MetricStatisticEnum[];
    unit: MetricUnitEnum;
}
