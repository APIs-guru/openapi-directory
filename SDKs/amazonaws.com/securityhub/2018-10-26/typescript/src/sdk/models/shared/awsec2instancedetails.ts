import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2InstanceNetworkInterfacesDetails } from "./awsec2instancenetworkinterfacesdetails";



// AwsEc2InstanceDetails
/** 
 * The details of an EC2 instance.
**/
export class AwsEc2InstanceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamInstanceProfileArn" })
  iamInstanceProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=IpV4Addresses" })
  ipV4Addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=IpV6Addresses" })
  ipV6Addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=KeyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchedAt" })
  launchedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaces", elemType: AwsEc2InstanceNetworkInterfacesDetails })
  networkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[];

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
