import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VocabularyStateEnum } from "./vocabularystateenum";
import { VocabularyInfo } from "./vocabularyinfo";


export class ListMedicalVocabulariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: VocabularyStateEnum;

  @Metadata({ data: "json, name=Vocabularies", elemType: shared.VocabularyInfo })
  vocabularies?: VocabularyInfo[];
}
