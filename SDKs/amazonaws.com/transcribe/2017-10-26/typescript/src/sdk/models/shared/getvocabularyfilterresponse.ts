import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";


export class GetVocabularyFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DownloadUri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName?: string;
}
