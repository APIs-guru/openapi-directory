import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionErrorTypeEnum } from "./executionerrortypeenum";
/**
 * Specifies the error message and type, for an error that occurs during the execution of the workflow.
**/
export declare class ExecutionError extends SpeakeasyBase {
    message: string;
    type: ExecutionErrorTypeEnum;
}
