import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2InstanceNetworkInterfacesDetails
/** 
 * Identifies a network interface for the EC2 instance.
**/
export class AwsEc2InstanceNetworkInterfacesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;
}
