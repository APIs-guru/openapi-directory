import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2InstanceNetworkInterfacesDetails } from "./awsec2instancenetworkinterfacesdetails";
/**
 * The details of an EC2 instance.
**/
export declare class AwsEc2InstanceDetails extends SpeakeasyBase {
    iamInstanceProfileArn?: string;
    imageId?: string;
    ipV4Addresses?: string[];
    ipV6Addresses?: string[];
    keyName?: string;
    launchedAt?: string;
    networkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[];
    subnetId?: string;
    type?: string;
    vpcId?: string;
}
