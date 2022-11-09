import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcmChannelResponse } from "./gcmchannelresponse";


export class DeleteGcmChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GCMChannelResponse" })
  gcmChannelResponse: GcmChannelResponse;
}
