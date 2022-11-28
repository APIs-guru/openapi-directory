import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionCodeLocation } from "./functioncodelocation";
import { FunctionConfiguration } from "./functionconfiguration";
/**
 * This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a>
**/
export declare class GetFunctionResponse extends SpeakeasyBase {
    code?: FunctionCodeLocation;
    configuration?: FunctionConfiguration;
}
