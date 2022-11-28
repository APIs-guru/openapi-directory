import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationRoute } from "./destinationroute";
export declare enum ConfigTransportProtocolEnum {
    TransportProtocolUnspecified = "TRANSPORT_PROTOCOL_UNSPECIFIED",
    Tcp = "TCP"
}
/**
 * The basic ingress config for ClientGateways.
**/
export declare class Config extends SpeakeasyBase {
    destinationRoutes?: DestinationRoute[];
    transportProtocol?: ConfigTransportProtocolEnum;
}
