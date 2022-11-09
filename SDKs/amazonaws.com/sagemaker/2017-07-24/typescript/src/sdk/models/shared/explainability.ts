import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsSource } from "./metricssource";


// Explainability
/** 
 * Contains explainability metrics for a model.
**/
export class Explainability extends SpeakeasyBase {
  @Metadata({ data: "json, name=Report" })
  report?: MetricsSource;
}
