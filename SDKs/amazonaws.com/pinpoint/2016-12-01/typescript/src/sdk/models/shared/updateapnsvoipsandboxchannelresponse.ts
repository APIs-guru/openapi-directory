import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsVoipSandboxChannelResponse } from "./apnsvoipsandboxchannelresponse";


export class UpdateApnsVoipSandboxChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSVoipSandboxChannelResponse" })
  apnsVoipSandboxChannelResponse: ApnsVoipSandboxChannelResponse;
}
