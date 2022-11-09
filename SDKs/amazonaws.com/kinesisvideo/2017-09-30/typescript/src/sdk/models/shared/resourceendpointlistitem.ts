import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelProtocolEnum } from "./channelprotocolenum";


// ResourceEndpointListItem
/** 
 * An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
**/
export class ResourceEndpointListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Protocol" })
  protocol?: ChannelProtocolEnum;

  @Metadata({ data: "json, name=ResourceEndpoint" })
  resourceEndpoint?: string;
}
