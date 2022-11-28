import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelProtocolEnum } from "./channelprotocolenum";



// ResourceEndpointListItem
/** 
 * An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
**/
export class ResourceEndpointListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: ChannelProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceEndpoint" })
  resourceEndpoint?: string;
}
