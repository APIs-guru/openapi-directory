import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Network } from "./network";


// NetworkUsage
/** 
 * Network with all used IP addresses.
**/
export class NetworkUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: Network;

  @Metadata({ data: "json, name=usedIps" })
  usedIps?: string[];
}
