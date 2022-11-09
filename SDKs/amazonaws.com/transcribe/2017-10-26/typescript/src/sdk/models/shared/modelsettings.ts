import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelSettings
/** 
 * The object used to call your custom language model to your transcription job.
**/
export class ModelSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageModelName" })
  languageModelName?: string;
}
