import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2EipDetails
/** 
 * Information about an Elastic IP address.
**/
export class AwsEc2EipDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocationId" })
  allocationId?: string;

  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=NetworkBorderGroup" })
  networkBorderGroup?: string;

  @Metadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "json, name=NetworkInterfaceOwnerId" })
  networkInterfaceOwnerId?: string;

  @Metadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @Metadata({ data: "json, name=PublicIpv4Pool" })
  publicIpv4Pool?: string;
}
