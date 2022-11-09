import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelProtocolEnum } from "./channelprotocolenum";
/**
 * An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
**/
export declare class ResourceEndpointListItem extends SpeakeasyBase {
    protocol?: ChannelProtocolEnum;
    resourceEndpoint?: string;
}
