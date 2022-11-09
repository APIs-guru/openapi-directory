import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomChannel } from "./customchannel";


// ListLinkedCustomChannelsResponse
/** 
 * Response definition for the custom channels linked to an adunit list rpc.
**/
export class ListLinkedCustomChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customChannels", elemType: shared.CustomChannel })
  customChannels?: CustomChannel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
