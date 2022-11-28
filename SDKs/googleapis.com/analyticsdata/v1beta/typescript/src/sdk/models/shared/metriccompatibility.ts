import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricMetadata } from "./metricmetadata";


export enum MetricCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}


// MetricCompatibility
/** 
 * The compatibility for a single metric.
**/
export class MetricCompatibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: MetricCompatibilityCompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=metricMetadata" })
  metricMetadata?: MetricMetadata;
}
