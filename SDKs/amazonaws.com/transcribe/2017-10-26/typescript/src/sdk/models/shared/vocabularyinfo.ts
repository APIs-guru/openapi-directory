import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyStateEnum } from "./vocabularystateenum";



// VocabularyInfo
/** 
 * Provides information about a custom vocabulary. 
**/
export class VocabularyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyState" })
  vocabularyState?: VocabularyStateEnum;
}
