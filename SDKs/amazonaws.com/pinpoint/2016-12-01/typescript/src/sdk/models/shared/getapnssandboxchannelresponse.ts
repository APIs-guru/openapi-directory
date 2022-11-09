import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsSandboxChannelResponse } from "./apnssandboxchannelresponse";


export class GetApnsSandboxChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSSandboxChannelResponse" })
  apnsSandboxChannelResponse: ApnsSandboxChannelResponse;
}
