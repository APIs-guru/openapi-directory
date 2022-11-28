import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Source } from "./source";



// SsmValidationParameters
/** 
 * Contains validation parameters.
**/
export class SsmValidationParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTimeoutSeconds" })
  executionTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=outputS3BucketName" })
  outputS3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptType" })
  scriptType?: ScriptTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
