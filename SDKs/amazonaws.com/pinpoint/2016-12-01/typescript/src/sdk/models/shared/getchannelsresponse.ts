import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelsResponse } from "./channelsresponse";



export class GetChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelsResponse" })
  channelsResponse: ChannelsResponse;
}
