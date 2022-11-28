import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2SecurityGroupIpRange
/** 
 * A range of IPv4 addresses.
**/
export class AwsEc2SecurityGroupIpRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CidrIp" })
  cidrIp?: string;
}
