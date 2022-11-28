import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";
/**
 * A list of Lambda functions.
**/
export declare class ListFunctionsResponse extends SpeakeasyBase {
    functions?: FunctionConfiguration[];
    nextMarker?: string;
}
