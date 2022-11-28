import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";



// NetworkUsage
/** 
 * Network with all used IP addresses.
**/
export class NetworkUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: Network;

  @SpeakeasyMetadata({ data: "json, name=usedIps" })
  usedIps?: string[];
}
