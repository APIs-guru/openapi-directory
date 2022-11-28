import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfigResponse
/** 
 * The VPC security groups and subnets that are attached to a Lambda function.
**/
export class VpcConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
