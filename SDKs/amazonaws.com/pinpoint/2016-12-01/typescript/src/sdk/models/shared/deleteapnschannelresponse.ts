import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsChannelResponse } from "./apnschannelresponse";


export class DeleteApnsChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSChannelResponse" })
  apnsChannelResponse: ApnsChannelResponse;
}
