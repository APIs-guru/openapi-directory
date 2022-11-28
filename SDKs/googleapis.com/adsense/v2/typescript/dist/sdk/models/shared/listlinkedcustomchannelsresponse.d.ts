import { SpeakeasyBase } from "../../../internal/utils";
import { CustomChannel } from "./customchannel";
/**
 * Response definition for the custom channels linked to an adunit list rpc.
**/
export declare class ListLinkedCustomChannelsResponse extends SpeakeasyBase {
    customChannels?: CustomChannel[];
    nextPageToken?: string;
}
