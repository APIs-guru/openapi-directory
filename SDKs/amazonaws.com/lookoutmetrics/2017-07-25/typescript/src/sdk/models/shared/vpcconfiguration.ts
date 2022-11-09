import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfiguration
/** 
 * Contains configuration information about the Amazon Virtual Private Cloud (VPC).
**/
export class VpcConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIdList" })
  securityGroupIdList: string[];

  @Metadata({ data: "json, name=SubnetIdList" })
  subnetIdList: string[];
}
