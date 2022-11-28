import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.
**/
export declare class AsyncInferenceClientConfig extends SpeakeasyBase {
    maxConcurrentInvocationsPerInstance?: number;
}
