import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2VpnConnectionRoutesDetails
/** 
 * A static routes associated with the VPN connection.
**/
export class AwsEc2VpnConnectionRoutesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
