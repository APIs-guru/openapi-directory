import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * This type defines the fields returned in an error condition.
**/
export declare class Error extends SpeakeasyBase {
    category?: string;
    domain?: string;
    errorId?: number;
    inputRefIds?: string[];
    longMessage?: string;
    message?: string;
    outputRefIds?: string[];
    parameters?: ErrorParameter[];
    subdomain?: string;
}
