import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsChannelResponse } from "./apnschannelresponse";


export class GetApnsChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSChannelResponse" })
  apnsChannelResponse: ApnsChannelResponse;
}
