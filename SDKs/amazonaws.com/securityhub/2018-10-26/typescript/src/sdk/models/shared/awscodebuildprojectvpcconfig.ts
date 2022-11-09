import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCodeBuildProjectVpcConfig
/** 
 * Information about the VPC configuration that CodeBuild accesses.
**/
export class AwsCodeBuildProjectVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=Subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
