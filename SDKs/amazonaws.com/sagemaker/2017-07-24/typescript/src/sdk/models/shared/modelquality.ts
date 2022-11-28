import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsSource } from "./metricssource";



// ModelQuality
/** 
 * Model quality statistics and constraints.
**/
export class ModelQuality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Constraints" })
  constraints?: MetricsSource;

  @SpeakeasyMetadata({ data: "json, name=Statistics" })
  statistics?: MetricsSource;
}
