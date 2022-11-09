import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EdgeStatistics } from "./edgestatistics";
import { HistogramEntry } from "./histogramentry";
import { ForecastStatistics } from "./forecaststatistics";
import { ServiceStatistics } from "./servicestatistics";


// TimeSeriesServiceStatistics
/** 
 * A list of TimeSeriesStatistic structures.
**/
export class TimeSeriesServiceStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=EdgeSummaryStatistics" })
  edgeSummaryStatistics?: EdgeStatistics;

  @Metadata({ data: "json, name=ResponseTimeHistogram", elemType: shared.HistogramEntry })
  responseTimeHistogram?: HistogramEntry[];

  @Metadata({ data: "json, name=ServiceForecastStatistics" })
  serviceForecastStatistics?: ForecastStatistics;

  @Metadata({ data: "json, name=ServiceSummaryStatistics" })
  serviceSummaryStatistics?: ServiceStatistics;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
