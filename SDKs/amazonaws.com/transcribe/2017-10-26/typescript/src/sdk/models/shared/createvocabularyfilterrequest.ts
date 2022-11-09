import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";


export class CreateVocabularyFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VocabularyFilterFileUri" })
  vocabularyFilterFileUri?: string;

  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;

  @Metadata({ data: "json, name=Words" })
  words?: string[];
}
