import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsSource } from "./metricssource";



// Explainability
/** 
 * Contains explainability metrics for a model.
**/
export class Explainability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Report" })
  report?: MetricsSource;
}
