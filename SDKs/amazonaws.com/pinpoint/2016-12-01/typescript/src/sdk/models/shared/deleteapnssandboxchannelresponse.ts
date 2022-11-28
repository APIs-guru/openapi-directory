import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApnsSandboxChannelResponse } from "./apnssandboxchannelresponse";



export class DeleteApnsSandboxChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSSandboxChannelResponse" })
  apnsSandboxChannelResponse: ApnsSandboxChannelResponse;
}
