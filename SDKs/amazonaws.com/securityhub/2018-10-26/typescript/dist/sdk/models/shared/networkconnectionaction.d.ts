import { SpeakeasyBase } from "../../../internal/utils";
import { ActionLocalPortDetails } from "./actionlocalportdetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";
import { ActionRemotePortDetails } from "./actionremoteportdetails";
/**
 * Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
**/
export declare class NetworkConnectionAction extends SpeakeasyBase {
    blocked?: boolean;
    connectionDirection?: string;
    localPortDetails?: ActionLocalPortDetails;
    protocol?: string;
    remoteIpDetails?: ActionRemoteIpDetails;
    remotePortDetails?: ActionRemotePortDetails;
}
