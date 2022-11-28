import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VpnConnectionOptionsDetails } from "./awsec2vpnconnectionoptionsdetails";
import { AwsEc2VpnConnectionRoutesDetails } from "./awsec2vpnconnectionroutesdetails";
import { AwsEc2VpnConnectionVgwTelemetryDetails } from "./awsec2vpnconnectionvgwtelemetrydetails";
/**
 * Details about an Amazon EC2 VPN connection.
**/
export declare class AwsEc2VpnConnectionDetails extends SpeakeasyBase {
    category?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    options?: AwsEc2VpnConnectionOptionsDetails;
    routes?: AwsEc2VpnConnectionRoutesDetails[];
    state?: string;
    transitGatewayId?: string;
    type?: string;
    vgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
