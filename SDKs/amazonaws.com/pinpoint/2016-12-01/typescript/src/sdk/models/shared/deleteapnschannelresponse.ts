import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApnsChannelResponse } from "./apnschannelresponse";



export class DeleteApnsChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSChannelResponse" })
  apnsChannelResponse: ApnsChannelResponse;
}
