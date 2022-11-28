import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AsyncInferenceNotificationConfig
/** 
 * Specifies the configuration for notifications of inference results for asynchronous inference.
**/
export class AsyncInferenceNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorTopic" })
  errorTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=SuccessTopic" })
  successTopic?: string;
}
