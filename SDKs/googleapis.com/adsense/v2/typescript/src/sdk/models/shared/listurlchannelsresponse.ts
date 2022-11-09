import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UrlChannel } from "./urlchannel";


// ListUrlChannelsResponse
/** 
 * Response definition for the url channels list rpc.
**/
export class ListUrlChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=urlChannels", elemType: shared.UrlChannel })
  urlChannels?: UrlChannel[];
}
