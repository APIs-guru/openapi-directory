import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfigurationDescription
/** 
 * Describes the parameters of a VPC used by the application.
**/
export class VpcConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=VpcConfigurationId" })
  vpcConfigurationId: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
