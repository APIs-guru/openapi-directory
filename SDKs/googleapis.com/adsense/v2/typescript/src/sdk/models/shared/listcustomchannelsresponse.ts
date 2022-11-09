import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomChannel } from "./customchannel";


// ListCustomChannelsResponse
/** 
 * Response definition for the custom channel list rpc.
**/
export class ListCustomChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customChannels", elemType: shared.CustomChannel })
  customChannels?: CustomChannel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
