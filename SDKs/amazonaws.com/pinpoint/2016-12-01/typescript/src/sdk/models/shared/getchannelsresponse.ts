import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelsResponse } from "./channelsresponse";


export class GetChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelsResponse" })
  channelsResponse: ChannelsResponse;
}
