import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Source } from "./source";


// UserDataValidationParameters
/** 
 * Contains validation parameters.
**/
export class UserDataValidationParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=scriptType" })
  scriptType?: ScriptTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
