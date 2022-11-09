import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeSeriesServiceStatistics } from "./timeseriesservicestatistics";


export class GetTimeSeriesServiceStatisticsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainsOldGroupVersions" })
  containsOldGroupVersions?: boolean;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TimeSeriesServiceStatistics", elemType: shared.TimeSeriesServiceStatistics })
  timeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];
}
