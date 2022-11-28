import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Source } from "./source";



// UserDataValidationParameters
/** 
 * Contains validation parameters.
**/
export class UserDataValidationParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scriptType" })
  scriptType?: ScriptTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
