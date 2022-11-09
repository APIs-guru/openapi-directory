import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TranslationModelMetadata
/** 
 * Model metadata that is specific to translation.
**/
export class TranslationModelMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseModel" })
  baseModel?: string;

  @Metadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
