import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationRoute } from "./destinationroute";


export enum ConfigTransportProtocolEnum {
    TransportProtocolUnspecified = "TRANSPORT_PROTOCOL_UNSPECIFIED",
    Tcp = "TCP"
}


// Config
/** 
 * The basic ingress config for ClientGateways.
**/
export class Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationRoutes", elemType: DestinationRoute })
  destinationRoutes?: DestinationRoute[];

  @SpeakeasyMetadata({ data: "json, name=transportProtocol" })
  transportProtocol?: ConfigTransportProtocolEnum;
}
