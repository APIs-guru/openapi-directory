import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VocabularyStateEnum } from "./vocabularystateenum";



export class ListVocabulariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StateEquals" })
  stateEquals?: VocabularyStateEnum;
}
