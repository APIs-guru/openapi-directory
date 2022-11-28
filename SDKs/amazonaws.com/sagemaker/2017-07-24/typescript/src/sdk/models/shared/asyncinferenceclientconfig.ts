import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AsyncInferenceClientConfig
/** 
 * Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.
**/
export class AsyncInferenceClientConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentInvocationsPerInstance" })
  maxConcurrentInvocationsPerInstance?: number;
}
