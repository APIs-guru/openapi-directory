import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * A container that defines the elements of error and warning message.
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
