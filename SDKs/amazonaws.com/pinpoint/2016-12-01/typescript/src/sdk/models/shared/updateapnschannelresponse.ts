import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApnsChannelResponse } from "./apnschannelresponse";



export class UpdateApnsChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSChannelResponse" })
  apnsChannelResponse: ApnsChannelResponse;
}
