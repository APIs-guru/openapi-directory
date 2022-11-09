import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsVoipSandboxChannelResponse } from "./apnsvoipsandboxchannelresponse";


export class DeleteApnsVoipSandboxChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSVoipSandboxChannelResponse" })
  apnsVoipSandboxChannelResponse: ApnsVoipSandboxChannelResponse;
}
