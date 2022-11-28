import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * An error that explains why an action did not succeed.
**/
export declare class ErrorReason extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
}
