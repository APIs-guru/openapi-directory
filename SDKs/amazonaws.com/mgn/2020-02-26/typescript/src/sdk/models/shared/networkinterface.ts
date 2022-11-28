import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterface
/** 
 * Network interface.
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ips" })
  ips?: string[];

  @SpeakeasyMetadata({ data: "json, name=isPrimary" })
  isPrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=macAddress" })
  macAddress?: string;
}
