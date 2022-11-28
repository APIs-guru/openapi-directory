import { SpeakeasyBase } from "../../../internal/utils";
import { CustomChannel } from "./customchannel";
/**
 * Response definition for the custom channel list rpc.
**/
export declare class ListCustomChannelsResponse extends SpeakeasyBase {
    customChannels?: CustomChannel[];
    nextPageToken?: string;
}
