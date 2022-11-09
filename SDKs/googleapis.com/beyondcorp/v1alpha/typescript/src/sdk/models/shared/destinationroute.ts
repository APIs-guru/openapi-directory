import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DestinationRoute
/** 
 * The setting used to configure ClientGateways. It is adding routes to the client's routing table after the connection is established.
**/
export class DestinationRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=netmask" })
  netmask?: string;
}
