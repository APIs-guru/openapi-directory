import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2SecurityGroupIpv6Range
/** 
 * A range of IPv6 addresses.
**/
export class AwsEc2SecurityGroupIpv6Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CidrIpv6" })
  cidrIpv6?: string;
}
