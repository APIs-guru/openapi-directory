import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesServiceStatistics } from "./timeseriesservicestatistics";



export class GetTimeSeriesServiceStatisticsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainsOldGroupVersions" })
  containsOldGroupVersions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeSeriesServiceStatistics", elemType: TimeSeriesServiceStatistics })
  timeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];
}
