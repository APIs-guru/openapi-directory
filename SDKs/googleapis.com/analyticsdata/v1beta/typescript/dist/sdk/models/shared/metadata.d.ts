import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";
/**
 * The dimensions and metrics currently accepted in reporting methods.
**/
export declare class Metadata extends SpeakeasyBase {
    dimensions?: DimensionMetadata[];
    metrics?: MetricMetadata[];
    name?: string;
}
