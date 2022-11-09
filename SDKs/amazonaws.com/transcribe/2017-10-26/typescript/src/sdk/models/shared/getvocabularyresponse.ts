import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyStateEnum } from "./vocabularystateenum";


export class GetVocabularyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DownloadUri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;

  @Metadata({ data: "json, name=VocabularyState" })
  vocabularyState?: VocabularyStateEnum;
}
