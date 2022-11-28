import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVocabularyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName: string;
}
