import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AsyncInferenceClientConfig
/** 
 * Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.
**/
export class AsyncInferenceClientConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxConcurrentInvocationsPerInstance" })
  maxConcurrentInvocationsPerInstance?: number;
}
