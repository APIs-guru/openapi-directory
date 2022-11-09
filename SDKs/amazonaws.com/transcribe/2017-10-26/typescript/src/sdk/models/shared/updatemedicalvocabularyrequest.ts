import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";


export class UpdateMedicalVocabularyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @Metadata({ data: "json, name=VocabularyFileUri" })
  vocabularyFileUri?: string;

  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
