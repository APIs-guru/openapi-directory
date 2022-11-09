import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsSource } from "./metricssource";
import { MetricsSource } from "./metricssource";


// ModelQuality
/** 
 * Model quality statistics and constraints.
**/
export class ModelQuality extends SpeakeasyBase {
  @Metadata({ data: "json, name=Constraints" })
  constraints?: MetricsSource;

  @Metadata({ data: "json, name=Statistics" })
  statistics?: MetricsSource;
}
