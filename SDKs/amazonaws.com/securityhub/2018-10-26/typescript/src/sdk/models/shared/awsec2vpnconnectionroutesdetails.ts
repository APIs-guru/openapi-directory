import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2VpnConnectionRoutesDetails
/** 
 * A static routes associated with the VPN connection.
**/
export class AwsEc2VpnConnectionRoutesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
