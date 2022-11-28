import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { GenderEnum } from "./genderenum";
import { VoiceIdEnum } from "./voiceidenum";
import { EngineEnum } from "./engineenum";



// Voice
/** 
 * Description of the voice.
**/
export class Voice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalLanguageCodes" })
  additionalLanguageCodes?: LanguageCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Gender" })
  gender?: GenderEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: VoiceIdEnum;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LanguageName" })
  languageName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportedEngines" })
  supportedEngines?: EngineEnum[];
}
