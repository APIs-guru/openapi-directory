import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomChannel } from "./customchannel";



// ListLinkedCustomChannelsResponse
/** 
 * Response definition for the custom channels linked to an adunit list rpc.
**/
export class ListLinkedCustomChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customChannels", elemType: CustomChannel })
  customChannels?: CustomChannel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
