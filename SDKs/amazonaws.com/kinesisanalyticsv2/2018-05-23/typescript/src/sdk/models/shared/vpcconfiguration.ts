import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfiguration
/** 
 * Describes the parameters of a VPC used by the application.
**/
export class VpcConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
