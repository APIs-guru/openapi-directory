import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateVocabularyFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterFileUri" })
  vocabularyFilterFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;

  @SpeakeasyMetadata({ data: "json, name=Words" })
  words?: string[];
}
