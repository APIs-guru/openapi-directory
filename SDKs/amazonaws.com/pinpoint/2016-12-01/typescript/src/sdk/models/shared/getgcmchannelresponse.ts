import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcmChannelResponse } from "./gcmchannelresponse";



export class GetGcmChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GCMChannelResponse" })
  gcmChannelResponse: GcmChannelResponse;
}
