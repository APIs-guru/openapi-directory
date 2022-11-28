import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionCodeLocation } from "./functioncodelocation";
import { FunctionConfiguration } from "./functionconfiguration";



// GetFunctionResponse
/** 
 * This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a>
**/
export class GetFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: FunctionCodeLocation;

  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: FunctionConfiguration;
}
