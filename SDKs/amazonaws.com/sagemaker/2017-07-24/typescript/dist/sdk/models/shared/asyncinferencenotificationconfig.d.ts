import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the configuration for notifications of inference results for asynchronous inference.
**/
export declare class AsyncInferenceNotificationConfig extends SpeakeasyBase {
    errorTopic?: string;
    successTopic?: string;
}
