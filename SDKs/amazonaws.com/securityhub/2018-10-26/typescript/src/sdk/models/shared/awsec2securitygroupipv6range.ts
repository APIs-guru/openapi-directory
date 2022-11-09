import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2SecurityGroupIpv6Range
/** 
 * A range of IPv6 addresses.
**/
export class AwsEc2SecurityGroupIpv6Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=CidrIpv6" })
  cidrIpv6?: string;
}
