import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2SecurityGroupIpRange
/** 
 * A range of IPv4 addresses.
**/
export class AwsEc2SecurityGroupIpRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=CidrIp" })
  cidrIp?: string;
}
