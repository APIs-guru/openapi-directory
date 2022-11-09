import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Source } from "./source";


// SsmValidationParameters
/** 
 * Contains validation parameters.
**/
export class SsmValidationParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string;

  @Metadata({ data: "json, name=executionTimeoutSeconds" })
  executionTimeoutSeconds?: number;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=outputS3BucketName" })
  outputS3BucketName?: string;

  @Metadata({ data: "json, name=scriptType" })
  scriptType?: ScriptTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
