import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCodeBuildProjectVpcConfig
/** 
 * Information about the VPC configuration that CodeBuild accesses.
**/
export class AwsCodeBuildProjectVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
