import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";



export class GetVocabularyFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DownloadUri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName?: string;
}
