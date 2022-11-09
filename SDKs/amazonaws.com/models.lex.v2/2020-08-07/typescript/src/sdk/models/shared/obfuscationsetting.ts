import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObfuscationSettingTypeEnum } from "./obfuscationsettingtypeenum";


// ObfuscationSetting
/** 
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
export class ObfuscationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=obfuscationSettingType" })
  obfuscationSettingType: ObfuscationSettingTypeEnum;
}
