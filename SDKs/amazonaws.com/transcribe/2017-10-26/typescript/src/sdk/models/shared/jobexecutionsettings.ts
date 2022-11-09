import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobExecutionSettings
/** 
 * Provides information about when a transcription job should be executed.
**/
export class JobExecutionSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowDeferredExecution" })
  allowDeferredExecution?: boolean;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;
}
