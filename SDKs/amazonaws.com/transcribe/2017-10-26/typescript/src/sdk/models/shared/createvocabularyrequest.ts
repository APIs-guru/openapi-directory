import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";


export class CreateVocabularyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @Metadata({ data: "json, name=Phrases" })
  phrases?: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VocabularyFileUri" })
  vocabularyFileUri?: string;

  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
