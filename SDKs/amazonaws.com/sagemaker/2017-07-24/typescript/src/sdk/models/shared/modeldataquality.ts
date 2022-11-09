import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsSource } from "./metricssource";
import { MetricsSource } from "./metricssource";


// ModelDataQuality
/** 
 * Data quality constraints and statistics for a model.
**/
export class ModelDataQuality extends SpeakeasyBase {
  @Metadata({ data: "json, name=Constraints" })
  constraints?: MetricsSource;

  @Metadata({ data: "json, name=Statistics" })
  statistics?: MetricsSource;
}
