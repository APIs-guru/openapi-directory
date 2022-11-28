import { SpeakeasyBase } from "../../../internal/utils";
import { OutputParameter } from "./outputparameter";
/**
 * Metadata about a callback step.
**/
export declare class CallbackStepMetadata extends SpeakeasyBase {
    callbackToken?: string;
    outputParameters?: OutputParameter[];
    sqsQueueUrl?: string;
}
