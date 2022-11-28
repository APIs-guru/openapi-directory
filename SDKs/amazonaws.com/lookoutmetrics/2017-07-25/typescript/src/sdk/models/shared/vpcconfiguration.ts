import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfiguration
/** 
 * Contains configuration information about the Amazon Virtual Private Cloud (VPC).
**/
export class VpcConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIdList" })
  securityGroupIdList: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIdList" })
  subnetIdList: string[];
}
