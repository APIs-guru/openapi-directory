import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVocabularyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
