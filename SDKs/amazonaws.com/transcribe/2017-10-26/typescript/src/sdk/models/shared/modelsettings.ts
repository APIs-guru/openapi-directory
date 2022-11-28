import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelSettings
/** 
 * The object used to call your custom language model to your transcription job.
**/
export class ModelSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageModelName" })
  languageModelName?: string;
}
