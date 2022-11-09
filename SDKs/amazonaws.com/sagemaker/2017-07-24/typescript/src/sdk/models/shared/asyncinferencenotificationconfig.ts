import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AsyncInferenceNotificationConfig
/** 
 * Specifies the configuration for notifications of inference results for asynchronous inference.
**/
export class AsyncInferenceNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorTopic" })
  errorTopic?: string;

  @Metadata({ data: "json, name=SuccessTopic" })
  successTopic?: string;
}
