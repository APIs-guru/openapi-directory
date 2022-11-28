import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVocabularyFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;
}
