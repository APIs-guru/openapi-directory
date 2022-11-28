import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlChannel } from "./urlchannel";



// ListUrlChannelsResponse
/** 
 * Response definition for the url channels list rpc.
**/
export class ListUrlChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=urlChannels", elemType: UrlChannel })
  urlChannels?: UrlChannel[];
}
