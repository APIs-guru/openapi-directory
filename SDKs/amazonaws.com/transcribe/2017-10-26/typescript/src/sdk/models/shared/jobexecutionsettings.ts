import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobExecutionSettings
/** 
 * Provides information about when a transcription job should be executed.
**/
export class JobExecutionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowDeferredExecution" })
  allowDeferredExecution?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;
}
