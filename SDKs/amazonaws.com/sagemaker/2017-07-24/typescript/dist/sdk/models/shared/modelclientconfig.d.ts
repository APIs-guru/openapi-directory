import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures the timeout and maximum number of retries for processing a transform job invocation.
**/
export declare class ModelClientConfig extends SpeakeasyBase {
    invocationsMaxRetries?: number;
    invocationsTimeoutInSeconds?: number;
}
