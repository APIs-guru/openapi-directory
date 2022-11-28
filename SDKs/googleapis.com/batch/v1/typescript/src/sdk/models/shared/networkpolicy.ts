import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";



// NetworkPolicy
/** 
 * NetworkPolicy describes VM instance network configurations.
**/
export class NetworkPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];
}
