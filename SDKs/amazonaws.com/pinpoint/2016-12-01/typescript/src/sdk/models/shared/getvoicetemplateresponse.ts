import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VoiceTemplateResponse } from "./voicetemplateresponse";


export class GetVoiceTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=VoiceTemplateResponse" })
  voiceTemplateResponse: VoiceTemplateResponse;
}
