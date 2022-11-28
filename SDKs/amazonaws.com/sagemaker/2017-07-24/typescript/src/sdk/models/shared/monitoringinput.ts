import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointInput } from "./endpointinput";



// MonitoringInput
/** 
 * The inputs for a monitoring job.
**/
export class MonitoringInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;
}
