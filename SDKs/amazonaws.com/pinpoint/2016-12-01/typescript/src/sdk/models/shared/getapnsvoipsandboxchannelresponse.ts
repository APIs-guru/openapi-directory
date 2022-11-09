import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsVoipSandboxChannelResponse } from "./apnsvoipsandboxchannelresponse";


export class GetApnsVoipSandboxChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSVoipSandboxChannelResponse" })
  apnsVoipSandboxChannelResponse: ApnsVoipSandboxChannelResponse;
}
