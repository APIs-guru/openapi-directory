import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceNotificationConfig } from "./asyncinferencenotificationconfig";



// AsyncInferenceOutputConfig
/** 
 * Specifies the configuration for asynchronous inference invocation outputs.
**/
export class AsyncInferenceOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationConfig" })
  notificationConfig?: AsyncInferenceNotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
