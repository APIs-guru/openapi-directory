import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";



export class UpdateVocabularyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Phrases" })
  phrases?: string[];

  @SpeakeasyMetadata({ data: "json, name=VocabularyFileUri" })
  vocabularyFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
