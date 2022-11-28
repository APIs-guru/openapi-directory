import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeries } from "./timeseries";
export declare class ListAnomalyGroupTimeSeriesResponse extends SpeakeasyBase {
    anomalyGroupId?: string;
    metricName?: string;
    nextToken?: string;
    timeSeriesList?: TimeSeries[];
    timestampList?: string[];
}
