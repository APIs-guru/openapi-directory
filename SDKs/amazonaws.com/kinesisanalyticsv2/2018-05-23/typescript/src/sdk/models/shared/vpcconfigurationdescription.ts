import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfigurationDescription
/** 
 * Describes the parameters of a VPC used by the application.
**/
export class VpcConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurationId" })
  vpcConfigurationId: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
