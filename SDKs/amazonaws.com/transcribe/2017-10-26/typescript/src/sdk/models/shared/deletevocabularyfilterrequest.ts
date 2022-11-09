import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteVocabularyFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;
}
