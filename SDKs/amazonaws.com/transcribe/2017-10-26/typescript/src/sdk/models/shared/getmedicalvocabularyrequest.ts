import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMedicalVocabularyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
