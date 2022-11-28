import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkAddress
/** 
 * A network.
**/
export class NetworkAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=existingNetworkId" })
  existingNetworkId?: string;

  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId?: string;
}
