import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsApiCallAction } from "./awsapicallaction";
import { DnsRequestAction } from "./dnsrequestaction";
import { NetworkConnectionAction } from "./networkconnectionaction";
import { PortProbeAction } from "./portprobeaction";



// Action
/** 
 * <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul>
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsApiCallAction" })
  awsApiCallAction?: AwsApiCallAction;

  @SpeakeasyMetadata({ data: "json, name=DnsRequestAction" })
  dnsRequestAction?: DnsRequestAction;

  @SpeakeasyMetadata({ data: "json, name=NetworkConnectionAction" })
  networkConnectionAction?: NetworkConnectionAction;

  @SpeakeasyMetadata({ data: "json, name=PortProbeAction" })
  portProbeAction?: PortProbeAction;
}
