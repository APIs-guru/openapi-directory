import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterface
/** 
 * A network interface.
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=noExternalIpAddress" })
  noExternalIpAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
