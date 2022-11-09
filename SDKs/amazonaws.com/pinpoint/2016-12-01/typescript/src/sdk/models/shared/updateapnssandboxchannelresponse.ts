import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsSandboxChannelResponse } from "./apnssandboxchannelresponse";


export class UpdateApnsSandboxChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSSandboxChannelResponse" })
  apnsSandboxChannelResponse: ApnsSandboxChannelResponse;
}
