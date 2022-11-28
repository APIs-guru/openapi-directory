import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VpnConnectionOptionsTunnelOptionsDetails } from "./awsec2vpnconnectionoptionstunneloptionsdetails";
/**
 * VPN connection options.
**/
export declare class AwsEc2VpnConnectionOptionsDetails extends SpeakeasyBase {
    staticRoutesOnly?: boolean;
    tunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
}
