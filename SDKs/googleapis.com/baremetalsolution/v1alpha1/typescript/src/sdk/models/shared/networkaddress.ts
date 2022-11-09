import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkAddress
/** 
 * A network.
**/
export class NetworkAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=existingNetworkId" })
  existingNetworkId?: string;

  @Metadata({ data: "json, name=networkId" })
  networkId?: string;
}
