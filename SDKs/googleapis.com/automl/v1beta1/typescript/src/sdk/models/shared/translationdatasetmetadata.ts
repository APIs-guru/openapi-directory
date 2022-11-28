import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TranslationDatasetMetadata
/** 
 * Dataset metadata that is specific to translation.
**/
export class TranslationDatasetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
