import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";
/**
 * This type defines the fields included in the report.
**/
export declare class ReportMetadata extends SpeakeasyBase {
    dimensionMetadata?: DimensionMetadata[];
    maxNumberOfDimensionsToRequest?: number;
    maxNumberOfMetricsToRequest?: number;
    metricMetadata?: MetricMetadata[];
    reportType?: string;
}
