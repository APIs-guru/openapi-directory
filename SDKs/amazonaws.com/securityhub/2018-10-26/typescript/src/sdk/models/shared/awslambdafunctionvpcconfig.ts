import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsLambdaFunctionVpcConfig
/** 
 * The VPC security groups and subnets that are attached to a Lambda function.
**/
export class AwsLambdaFunctionVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
