import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsSource } from "./metricssource";


// Bias
/** 
 * Contains bias metrics for a model.
**/
export class Bias extends SpeakeasyBase {
  @Metadata({ data: "json, name=Report" })
  report?: MetricsSource;
}
