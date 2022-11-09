import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VoiceChannelResponse } from "./voicechannelresponse";


export class UpdateVoiceChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=VoiceChannelResponse" })
  voiceChannelResponse: VoiceChannelResponse;
}
