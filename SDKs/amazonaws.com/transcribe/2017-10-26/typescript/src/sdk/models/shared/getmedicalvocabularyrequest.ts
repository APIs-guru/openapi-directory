import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMedicalVocabularyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
