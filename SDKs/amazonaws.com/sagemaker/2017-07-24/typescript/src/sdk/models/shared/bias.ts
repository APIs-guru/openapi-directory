import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsSource } from "./metricssource";



// Bias
/** 
 * Contains bias metrics for a model.
**/
export class Bias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Report" })
  report?: MetricsSource;
}
