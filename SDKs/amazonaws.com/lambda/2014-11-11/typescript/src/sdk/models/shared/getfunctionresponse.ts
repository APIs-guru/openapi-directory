import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionCodeLocation } from "./functioncodelocation";
import { FunctionConfiguration } from "./functionconfiguration";


// GetFunctionResponse
/** 
 * This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a>
**/
export class GetFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: FunctionCodeLocation;

  @Metadata({ data: "json, name=Configuration" })
  configuration?: FunctionConfiguration;
}
