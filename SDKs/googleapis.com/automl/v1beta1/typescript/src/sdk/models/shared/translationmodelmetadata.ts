import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TranslationModelMetadata
/** 
 * Model metadata that is specific to translation.
**/
export class TranslationModelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseModel" })
  baseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
