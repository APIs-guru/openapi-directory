import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeStatistics } from "./edgestatistics";
import { HistogramEntry } from "./histogramentry";
import { ForecastStatistics } from "./forecaststatistics";
import { ServiceStatistics } from "./servicestatistics";
/**
 * A list of TimeSeriesStatistic structures.
**/
export declare class TimeSeriesServiceStatistics extends SpeakeasyBase {
    edgeSummaryStatistics?: EdgeStatistics;
    responseTimeHistogram?: HistogramEntry[];
    serviceForecastStatistics?: ForecastStatistics;
    serviceSummaryStatistics?: ServiceStatistics;
    timestamp?: Date;
}
