import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TranslationDatasetMetadata
/** 
 * Dataset metadata that is specific to translation.
**/
export class TranslationDatasetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
