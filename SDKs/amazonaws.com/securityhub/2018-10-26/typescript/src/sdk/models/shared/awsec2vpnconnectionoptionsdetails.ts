import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2VpnConnectionOptionsTunnelOptionsDetails } from "./awsec2vpnconnectionoptionstunneloptionsdetails";


// AwsEc2VpnConnectionOptionsDetails
/** 
 * VPN connection options.
**/
export class AwsEc2VpnConnectionOptionsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=StaticRoutesOnly" })
  staticRoutesOnly?: boolean;

  @Metadata({ data: "json, name=TunnelOptions", elemType: shared.AwsEc2VpnConnectionOptionsTunnelOptionsDetails })
  tunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
}
