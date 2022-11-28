import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VoiceTemplateResponse } from "./voicetemplateresponse";



export class GetVoiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VoiceTemplateResponse" })
  voiceTemplateResponse: VoiceTemplateResponse;
}
