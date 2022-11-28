import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2InstanceNetworkInterfacesDetails
/** 
 * Identifies a network interface for the EC2 instance.
**/
export class AwsEc2InstanceNetworkInterfacesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;
}
