import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AsyncInferenceNotificationConfig } from "./asyncinferencenotificationconfig";


// AsyncInferenceOutputConfig
/** 
 * Specifies the configuration for asynchronous inference invocation outputs.
**/
export class AsyncInferenceOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=NotificationConfig" })
  notificationConfig?: AsyncInferenceNotificationConfig;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
