import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelResponse } from "./channelresponse";



// ChannelsResponse
/** 
 * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
**/
export class ChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Channels", elemType: ChannelResponse })
  channels: Map<string, ChannelResponse>;
}
