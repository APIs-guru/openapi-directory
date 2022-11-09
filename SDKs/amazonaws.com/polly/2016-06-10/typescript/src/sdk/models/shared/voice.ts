import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { GenderEnum } from "./genderenum";
import { VoiceIdEnum } from "./voiceidenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { EngineEnum } from "./engineenum";


// Voice
/** 
 * Description of the voice.
**/
export class Voice extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalLanguageCodes" })
  additionalLanguageCodes?: LanguageCodeEnum[];

  @Metadata({ data: "json, name=Gender" })
  gender?: GenderEnum;

  @Metadata({ data: "json, name=Id" })
  id?: VoiceIdEnum;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LanguageName" })
  languageName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SupportedEngines" })
  supportedEngines?: EngineEnum[];
}
