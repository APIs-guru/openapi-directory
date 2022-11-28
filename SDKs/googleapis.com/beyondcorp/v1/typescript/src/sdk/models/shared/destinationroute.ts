import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinationRoute
/** 
 * The setting used to configure ClientGateways. It is adding routes to the client's routing table after the connection is established.
**/
export class DestinationRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=netmask" })
  netmask?: string;
}
