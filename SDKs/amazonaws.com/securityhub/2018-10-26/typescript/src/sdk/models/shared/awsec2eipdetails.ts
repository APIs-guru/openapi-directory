import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2EipDetails
/** 
 * Information about an Elastic IP address.
**/
export class AwsEc2EipDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocationId" })
  allocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkBorderGroup" })
  networkBorderGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaceOwnerId" })
  networkInterfaceOwnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicIpv4Pool" })
  publicIpv4Pool?: string;
}
