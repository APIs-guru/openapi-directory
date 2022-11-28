import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VpnConnectionOptionsDetails } from "./awsec2vpnconnectionoptionsdetails";
import { AwsEc2VpnConnectionRoutesDetails } from "./awsec2vpnconnectionroutesdetails";
import { AwsEc2VpnConnectionVgwTelemetryDetails } from "./awsec2vpnconnectionvgwtelemetrydetails";



// AwsEc2VpnConnectionDetails
/** 
 * Details about an Amazon EC2 VPN connection.
**/
export class AwsEc2VpnConnectionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerGatewayConfiguration" })
  customerGatewayConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerGatewayId" })
  customerGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: AwsEc2VpnConnectionOptionsDetails;

  @SpeakeasyMetadata({ data: "json, name=Routes", elemType: AwsEc2VpnConnectionRoutesDetails })
  routes?: AwsEc2VpnConnectionRoutesDetails[];

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=TransitGatewayId" })
  transitGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=VgwTelemetry", elemType: AwsEc2VpnConnectionVgwTelemetryDetails })
  vgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[];

  @SpeakeasyMetadata({ data: "json, name=VpnConnectionId" })
  vpnConnectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpnGatewayId" })
  vpnGatewayId?: string;
}
