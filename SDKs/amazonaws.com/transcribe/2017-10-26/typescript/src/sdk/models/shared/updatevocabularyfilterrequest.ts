import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateVocabularyFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VocabularyFilterFileUri" })
  vocabularyFilterFileUri?: string;

  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName: string;

  @Metadata({ data: "json, name=Words" })
  words?: string[];
}
