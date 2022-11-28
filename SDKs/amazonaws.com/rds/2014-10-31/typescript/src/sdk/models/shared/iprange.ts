import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpRange
/** 
 *  This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. 
**/
export class IpRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrip?: string;

  @SpeakeasyMetadata()
  status?: string;
}
