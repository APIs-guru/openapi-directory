import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";


// VocabularyFilterInfo
/** 
 * Provides information about a vocabulary filter.
**/
export class VocabularyFilterInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName?: string;
}
