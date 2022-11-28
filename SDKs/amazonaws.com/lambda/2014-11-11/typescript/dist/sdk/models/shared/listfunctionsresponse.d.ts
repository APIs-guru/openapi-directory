import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";
/**
 * Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>.
**/
export declare class ListFunctionsResponse extends SpeakeasyBase {
    functions?: FunctionConfiguration[];
    nextMarker?: string;
}
