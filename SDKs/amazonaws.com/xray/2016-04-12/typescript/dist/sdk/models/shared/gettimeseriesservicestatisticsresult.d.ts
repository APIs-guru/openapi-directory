import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesServiceStatistics } from "./timeseriesservicestatistics";
export declare class GetTimeSeriesServiceStatisticsResult extends SpeakeasyBase {
    containsOldGroupVersions?: boolean;
    nextToken?: string;
    timeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];
}
