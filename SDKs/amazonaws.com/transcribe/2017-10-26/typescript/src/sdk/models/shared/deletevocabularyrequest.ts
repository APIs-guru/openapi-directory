import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteVocabularyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
