import { SpeakeasyBase } from "../../../internal/utils";
import { MethodSelector } from "./methodselector";
/**
 * Identification for an API Operation.
**/
export declare class ApiOperation extends SpeakeasyBase {
    methodSelectors?: MethodSelector[];
    serviceName?: string;
}
