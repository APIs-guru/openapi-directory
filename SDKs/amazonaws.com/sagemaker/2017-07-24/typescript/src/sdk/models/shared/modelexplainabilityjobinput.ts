import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointInput } from "./endpointinput";


// ModelExplainabilityJobInput
/** 
 * Inputs for the model explainability job.
**/
export class ModelExplainabilityJobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;
}
