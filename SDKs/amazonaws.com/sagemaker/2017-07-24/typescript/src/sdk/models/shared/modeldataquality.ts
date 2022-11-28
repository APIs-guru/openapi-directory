import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsSource } from "./metricssource";



// ModelDataQuality
/** 
 * Data quality constraints and statistics for a model.
**/
export class ModelDataQuality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Constraints" })
  constraints?: MetricsSource;

  @SpeakeasyMetadata({ data: "json, name=Statistics" })
  statistics?: MetricsSource;
}
