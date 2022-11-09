import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkInterface
/** 
 * Network interface.
**/
export class NetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=ips" })
  ips?: string[];

  @Metadata({ data: "json, name=isPrimary" })
  isPrimary?: boolean;

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string;
}
