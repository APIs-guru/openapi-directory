import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";
/**
 * NetworkPolicy describes VM instance network configurations.
**/
export declare class NetworkPolicy extends SpeakeasyBase {
    networkInterfaces?: NetworkInterface[];
}
