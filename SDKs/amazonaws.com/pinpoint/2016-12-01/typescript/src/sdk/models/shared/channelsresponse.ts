import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelResponse } from "./channelresponse";


// ChannelsResponse
/** 
 * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
**/
export class ChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Channels", elemType: shared.ChannelResponse })
  channels: Map<string, ChannelResponse>;
}
