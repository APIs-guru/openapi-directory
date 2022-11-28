import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionCompatibility } from "./dimensioncompatibility";
import { MetricCompatibility } from "./metriccompatibility";



// CheckCompatibilityResponse
/** 
 * The compatibility response with the compatibility of each dimension & metric.
**/
export class CheckCompatibilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionCompatibilities", elemType: DimensionCompatibility })
  dimensionCompatibilities?: DimensionCompatibility[];

  @SpeakeasyMetadata({ data: "json, name=metricCompatibilities", elemType: MetricCompatibility })
  metricCompatibilities?: MetricCompatibility[];
}
