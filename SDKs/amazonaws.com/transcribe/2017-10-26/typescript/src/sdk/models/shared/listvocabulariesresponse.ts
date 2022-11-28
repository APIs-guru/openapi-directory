import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VocabularyStateEnum } from "./vocabularystateenum";
import { VocabularyInfo } from "./vocabularyinfo";



export class ListVocabulariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: VocabularyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Vocabularies", elemType: VocabularyInfo })
  vocabularies?: VocabularyInfo[];
}
