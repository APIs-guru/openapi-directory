import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VpnConnectionOptionsTunnelOptionsDetails } from "./awsec2vpnconnectionoptionstunneloptionsdetails";



// AwsEc2VpnConnectionOptionsDetails
/** 
 * VPN connection options.
**/
export class AwsEc2VpnConnectionOptionsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StaticRoutesOnly" })
  staticRoutesOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TunnelOptions", elemType: AwsEc2VpnConnectionOptionsTunnelOptionsDetails })
  tunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
}
