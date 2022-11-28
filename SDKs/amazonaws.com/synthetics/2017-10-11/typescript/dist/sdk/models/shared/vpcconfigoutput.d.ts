import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
export declare class VpcConfigOutput extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
