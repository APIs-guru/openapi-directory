import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelResponse } from "./channelresponse";
/**
 * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
**/
export declare class ChannelsResponse extends SpeakeasyBase {
    channels: Map<string, ChannelResponse>;
}
