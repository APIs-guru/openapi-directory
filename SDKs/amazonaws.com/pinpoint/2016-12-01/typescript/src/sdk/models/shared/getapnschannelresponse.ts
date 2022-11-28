import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApnsChannelResponse } from "./apnschannelresponse";



export class GetApnsChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSChannelResponse" })
  apnsChannelResponse: ApnsChannelResponse;
}
