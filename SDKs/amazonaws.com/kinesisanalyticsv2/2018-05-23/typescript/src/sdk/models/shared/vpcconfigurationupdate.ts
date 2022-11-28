import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfigurationUpdate
/** 
 * Describes updates to the VPC configuration used by the application.
**/
export class VpcConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIdUpdates" })
  securityGroupIdUpdates?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIdUpdates" })
  subnetIdUpdates?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurationId" })
  vpcConfigurationId: string;
}
