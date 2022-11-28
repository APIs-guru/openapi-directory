import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApnsVoipSandboxChannelResponse } from "./apnsvoipsandboxchannelresponse";



export class UpdateApnsVoipSandboxChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSVoipSandboxChannelResponse" })
  apnsVoipSandboxChannelResponse: ApnsVoipSandboxChannelResponse;
}
