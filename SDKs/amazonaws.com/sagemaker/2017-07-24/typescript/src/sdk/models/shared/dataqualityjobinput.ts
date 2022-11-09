import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointInput } from "./endpointinput";


// DataQualityJobInput
/** 
 * The input for the data quality monitoring job. Currently endpoints are supported for input.
**/
export class DataQualityJobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;
}
