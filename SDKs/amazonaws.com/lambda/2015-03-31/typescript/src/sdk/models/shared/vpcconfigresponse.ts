import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfigResponse
/** 
 * The VPC security groups and subnets that are attached to a Lambda function.
**/
export class VpcConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
