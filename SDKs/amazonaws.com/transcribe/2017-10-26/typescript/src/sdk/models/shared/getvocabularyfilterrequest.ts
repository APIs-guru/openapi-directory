import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVocabularyFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;
}
