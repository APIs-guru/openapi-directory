import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfigurationUpdate
/** 
 * Describes updates to the VPC configuration used by the application.
**/
export class VpcConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIdUpdates" })
  securityGroupIdUpdates?: string[];

  @Metadata({ data: "json, name=SubnetIdUpdates" })
  subnetIdUpdates?: string[];

  @Metadata({ data: "json, name=VpcConfigurationId" })
  vpcConfigurationId: string;
}
