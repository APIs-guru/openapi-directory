import { SpeakeasyBase } from "../../../internal/utils";
import { UrlChannel } from "./urlchannel";
/**
 * Response definition for the url channels list rpc.
**/
export declare class ListUrlChannelsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    urlChannels?: UrlChannel[];
}
