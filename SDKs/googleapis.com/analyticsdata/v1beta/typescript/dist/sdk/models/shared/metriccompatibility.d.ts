import { SpeakeasyBase } from "../../../internal/utils";
import { MetricMetadata } from "./metricmetadata";
export declare enum MetricCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * The compatibility for a single metric.
**/
export declare class MetricCompatibility extends SpeakeasyBase {
    compatibility?: MetricCompatibilityCompatibilityEnum;
    metricMetadata?: MetricMetadata;
}
