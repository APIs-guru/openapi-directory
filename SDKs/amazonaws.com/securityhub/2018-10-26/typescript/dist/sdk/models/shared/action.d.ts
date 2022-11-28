import { SpeakeasyBase } from "../../../internal/utils";
import { AwsApiCallAction } from "./awsapicallaction";
import { DnsRequestAction } from "./dnsrequestaction";
import { NetworkConnectionAction } from "./networkconnectionaction";
import { PortProbeAction } from "./portprobeaction";
/**
 * <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul>
**/
export declare class Action extends SpeakeasyBase {
    actionType?: string;
    awsApiCallAction?: AwsApiCallAction;
    dnsRequestAction?: DnsRequestAction;
    networkConnectionAction?: NetworkConnectionAction;
    portProbeAction?: PortProbeAction;
}
