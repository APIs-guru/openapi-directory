import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceNotificationConfig } from "./asyncinferencenotificationconfig";
/**
 * Specifies the configuration for asynchronous inference invocation outputs.
**/
export declare class AsyncInferenceOutputConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    notificationConfig?: AsyncInferenceNotificationConfig;
    s3OutputPath: string;
}
