import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2InstanceNetworkInterfacesDetails } from "./awsec2instancenetworkinterfacesdetails";


// AwsEc2InstanceDetails
/** 
 * The details of an EC2 instance.
**/
export class AwsEc2InstanceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamInstanceProfileArn" })
  iamInstanceProfileArn?: string;

  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;

  @Metadata({ data: "json, name=IpV4Addresses" })
  ipV4Addresses?: string[];

  @Metadata({ data: "json, name=IpV6Addresses" })
  ipV6Addresses?: string[];

  @Metadata({ data: "json, name=KeyName" })
  keyName?: string;

  @Metadata({ data: "json, name=LaunchedAt" })
  launchedAt?: string;

  @Metadata({ data: "json, name=NetworkInterfaces", elemType: shared.AwsEc2InstanceNetworkInterfacesDetails })
  networkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[];

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
