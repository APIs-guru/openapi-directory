import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VocabularyStateEnum } from "./vocabularystateenum";


export class ListVocabulariesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StateEquals" })
  stateEquals?: VocabularyStateEnum;
}
