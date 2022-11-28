import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMedicalVocabularyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
