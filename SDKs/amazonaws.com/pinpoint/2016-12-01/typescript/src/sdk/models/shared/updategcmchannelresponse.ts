import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcmChannelResponse } from "./gcmchannelresponse";



export class UpdateGcmChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GCMChannelResponse" })
  gcmChannelResponse: GcmChannelResponse;
}
