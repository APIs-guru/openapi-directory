import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationRoute } from "./destinationroute";

export enum ConfigTransportProtocolEnum {
    TransportProtocolUnspecified = "TRANSPORT_PROTOCOL_UNSPECIFIED"
,    Tcp = "TCP"
}


// Config
/** 
 * The basic ingress config for ClientGateways.
**/
export class Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationRoutes", elemType: shared.DestinationRoute })
  destinationRoutes?: DestinationRoute[];

  @Metadata({ data: "json, name=transportProtocol" })
  transportProtocol?: ConfigTransportProtocolEnum;
}
