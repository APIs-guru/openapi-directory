import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricMetadata } from "./metricmetadata";

export enum MetricCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED"
,    Compatible = "COMPATIBLE"
,    Incompatible = "INCOMPATIBLE"
}


// MetricCompatibility
/** 
 * The compatibility for a single metric.
**/
export class MetricCompatibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibility" })
  compatibility?: MetricCompatibilityCompatibilityEnum;

  @Metadata({ data: "json, name=metricMetadata" })
  metricMetadata?: MetricMetadata;
}
