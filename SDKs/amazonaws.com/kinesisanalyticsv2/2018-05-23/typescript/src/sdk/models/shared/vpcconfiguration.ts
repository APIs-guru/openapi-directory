import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfiguration
/** 
 * Describes the parameters of a VPC used by the application.
**/
export class VpcConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
