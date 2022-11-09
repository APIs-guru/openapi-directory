import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVocabularyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
