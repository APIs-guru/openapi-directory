import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointInput } from "./endpointinput";


// MonitoringInput
/** 
 * The inputs for a monitoring job.
**/
export class MonitoringInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;
}
