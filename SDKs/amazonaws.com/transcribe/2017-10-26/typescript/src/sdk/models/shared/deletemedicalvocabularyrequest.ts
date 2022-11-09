import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMedicalVocabularyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
