import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomChannel } from "./customchannel";



// ListCustomChannelsResponse
/** 
 * Response definition for the custom channel list rpc.
**/
export class ListCustomChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customChannels", elemType: CustomChannel })
  customChannels?: CustomChannel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
