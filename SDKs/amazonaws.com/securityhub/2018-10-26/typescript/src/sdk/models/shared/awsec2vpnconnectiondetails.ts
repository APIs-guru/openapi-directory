import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2VpnConnectionOptionsDetails } from "./awsec2vpnconnectionoptionsdetails";
import { AwsEc2VpnConnectionRoutesDetails } from "./awsec2vpnconnectionroutesdetails";
import { AwsEc2VpnConnectionVgwTelemetryDetails } from "./awsec2vpnconnectionvgwtelemetrydetails";


// AwsEc2VpnConnectionDetails
/** 
 * Details about an Amazon EC2 VPN connection.
**/
export class AwsEc2VpnConnectionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=CustomerGatewayConfiguration" })
  customerGatewayConfiguration?: string;

  @Metadata({ data: "json, name=CustomerGatewayId" })
  customerGatewayId?: string;

  @Metadata({ data: "json, name=Options" })
  options?: AwsEc2VpnConnectionOptionsDetails;

  @Metadata({ data: "json, name=Routes", elemType: shared.AwsEc2VpnConnectionRoutesDetails })
  routes?: AwsEc2VpnConnectionRoutesDetails[];

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=TransitGatewayId" })
  transitGatewayId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=VgwTelemetry", elemType: shared.AwsEc2VpnConnectionVgwTelemetryDetails })
  vgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[];

  @Metadata({ data: "json, name=VpnConnectionId" })
  vpnConnectionId?: string;

  @Metadata({ data: "json, name=VpnGatewayId" })
  vpnGatewayId?: string;
}
