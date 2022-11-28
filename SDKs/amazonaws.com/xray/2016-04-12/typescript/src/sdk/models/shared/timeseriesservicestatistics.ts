import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeStatistics } from "./edgestatistics";
import { HistogramEntry } from "./histogramentry";
import { ForecastStatistics } from "./forecaststatistics";
import { ServiceStatistics } from "./servicestatistics";



// TimeSeriesServiceStatistics
/** 
 * A list of TimeSeriesStatistic structures.
**/
export class TimeSeriesServiceStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EdgeSummaryStatistics" })
  edgeSummaryStatistics?: EdgeStatistics;

  @SpeakeasyMetadata({ data: "json, name=ResponseTimeHistogram", elemType: HistogramEntry })
  responseTimeHistogram?: HistogramEntry[];

  @SpeakeasyMetadata({ data: "json, name=ServiceForecastStatistics" })
  serviceForecastStatistics?: ForecastStatistics;

  @SpeakeasyMetadata({ data: "json, name=ServiceSummaryStatistics" })
  serviceSummaryStatistics?: ServiceStatistics;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
