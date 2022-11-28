import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObfuscationSettingTypeEnum } from "./obfuscationsettingtypeenum";



// ObfuscationSetting
/** 
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
export class ObfuscationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=obfuscationSettingType" })
  obfuscationSettingType: ObfuscationSettingTypeEnum;
}
