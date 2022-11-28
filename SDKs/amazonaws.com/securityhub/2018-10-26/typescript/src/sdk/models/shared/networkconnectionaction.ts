import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionLocalPortDetails } from "./actionlocalportdetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";
import { ActionRemotePortDetails } from "./actionremoteportdetails";



// NetworkConnectionAction
/** 
 * Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
**/
export class NetworkConnectionAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blocked" })
  blocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConnectionDirection" })
  connectionDirection?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalPortDetails" })
  localPortDetails?: ActionLocalPortDetails;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteIpDetails" })
  remoteIpDetails?: ActionRemoteIpDetails;

  @SpeakeasyMetadata({ data: "json, name=RemotePortDetails" })
  remotePortDetails?: ActionRemotePortDetails;
}
