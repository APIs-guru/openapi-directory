import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionLocalIpDetails } from "./actionlocalipdetails";
import { ActionLocalPortDetails } from "./actionlocalportdetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";


// PortProbeDetail
/** 
 * A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from.
**/
export class PortProbeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocalIpDetails" })
  localIpDetails?: ActionLocalIpDetails;

  @Metadata({ data: "json, name=LocalPortDetails" })
  localPortDetails?: ActionLocalPortDetails;

  @Metadata({ data: "json, name=RemoteIpDetails" })
  remoteIpDetails?: ActionRemoteIpDetails;
}
