import { SpeakeasyBase } from "../../../internal/utils";
import { ObfuscationSettingTypeEnum } from "./obfuscationsettingtypeenum";
/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
**/
export declare class ObfuscationSetting extends SpeakeasyBase {
    obfuscationSettingType: ObfuscationSettingTypeEnum;
}
