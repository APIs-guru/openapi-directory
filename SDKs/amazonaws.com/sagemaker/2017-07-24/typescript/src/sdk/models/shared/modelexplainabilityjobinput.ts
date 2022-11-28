import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointInput } from "./endpointinput";



// ModelExplainabilityJobInput
/** 
 * Inputs for the model explainability job.
**/
export class ModelExplainabilityJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;
}
