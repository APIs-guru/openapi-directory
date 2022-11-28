import { SpeakeasyBase } from "../../../internal/utils";
import { ActionLocalIpDetails } from "./actionlocalipdetails";
import { ActionLocalPortDetails } from "./actionlocalportdetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";
/**
 * A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from.
**/
export declare class PortProbeDetail extends SpeakeasyBase {
    localIpDetails?: ActionLocalIpDetails;
    localPortDetails?: ActionLocalPortDetails;
    remoteIpDetails?: ActionRemoteIpDetails;
}
