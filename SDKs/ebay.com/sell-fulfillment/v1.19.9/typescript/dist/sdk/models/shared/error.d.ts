import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * This type contains a error or warning related to a call request.
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
