import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";



export class CreateVocabularyFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterFileUri" })
  vocabularyFilterFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;

  @SpeakeasyMetadata({ data: "json, name=Words" })
  words?: string[];
}
