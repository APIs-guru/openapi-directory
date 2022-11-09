import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVocabularyFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;
}
