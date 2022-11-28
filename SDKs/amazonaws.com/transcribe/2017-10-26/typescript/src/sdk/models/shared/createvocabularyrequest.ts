import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";



export class CreateVocabularyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Phrases" })
  phrases?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VocabularyFileUri" })
  vocabularyFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
