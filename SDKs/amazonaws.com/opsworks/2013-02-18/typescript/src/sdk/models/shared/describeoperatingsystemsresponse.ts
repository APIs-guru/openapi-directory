import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";



// DescribeOperatingSystemsResponse
/** 
 * The response to a <code>DescribeOperatingSystems</code> request.
**/
export class DescribeOperatingSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperatingSystems", elemType: OperatingSystem })
  operatingSystems?: OperatingSystem[];
}
