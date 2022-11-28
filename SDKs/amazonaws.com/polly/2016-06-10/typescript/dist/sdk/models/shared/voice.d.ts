import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { GenderEnum } from "./genderenum";
import { VoiceIdEnum } from "./voiceidenum";
import { EngineEnum } from "./engineenum";
/**
 * Description of the voice.
**/
export declare class Voice extends SpeakeasyBase {
    additionalLanguageCodes?: LanguageCodeEnum[];
    gender?: GenderEnum;
    id?: VoiceIdEnum;
    languageCode?: LanguageCodeEnum;
    languageName?: string;
    name?: string;
    supportedEngines?: EngineEnum[];
}
