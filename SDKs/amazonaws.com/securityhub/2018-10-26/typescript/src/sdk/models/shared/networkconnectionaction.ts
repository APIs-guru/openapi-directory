import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionLocalPortDetails } from "./actionlocalportdetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";
import { ActionRemotePortDetails } from "./actionremoteportdetails";


// NetworkConnectionAction
/** 
 * Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
**/
export class NetworkConnectionAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blocked" })
  blocked?: boolean;

  @Metadata({ data: "json, name=ConnectionDirection" })
  connectionDirection?: string;

  @Metadata({ data: "json, name=LocalPortDetails" })
  localPortDetails?: ActionLocalPortDetails;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=RemoteIpDetails" })
  remoteIpDetails?: ActionRemoteIpDetails;

  @Metadata({ data: "json, name=RemotePortDetails" })
  remotePortDetails?: ActionRemotePortDetails;
}
