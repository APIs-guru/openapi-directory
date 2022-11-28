import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VoiceChannelResponse } from "./voicechannelresponse";



export class UpdateVoiceChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VoiceChannelResponse" })
  voiceChannelResponse: VoiceChannelResponse;
}
