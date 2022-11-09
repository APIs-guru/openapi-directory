import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionCompatibility } from "./dimensioncompatibility";
import { MetricCompatibility } from "./metriccompatibility";


// CheckCompatibilityResponse
/** 
 * The compatibility response with the compatibility of each dimension & metric.
**/
export class CheckCompatibilityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionCompatibilities", elemType: shared.DimensionCompatibility })
  dimensionCompatibilities?: DimensionCompatibility[];

  @Metadata({ data: "json, name=metricCompatibilities", elemType: shared.MetricCompatibility })
  metricCompatibilities?: MetricCompatibility[];
}
