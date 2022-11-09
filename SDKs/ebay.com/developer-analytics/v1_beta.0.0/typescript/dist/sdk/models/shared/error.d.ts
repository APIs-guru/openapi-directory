import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * This type defines the fields that can be returned in an error.
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
