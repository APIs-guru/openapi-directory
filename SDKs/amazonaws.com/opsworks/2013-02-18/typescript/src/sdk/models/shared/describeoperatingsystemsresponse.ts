import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperatingSystem } from "./operatingsystem";


// DescribeOperatingSystemsResponse
/** 
 * The response to a <code>DescribeOperatingSystems</code> request.
**/
export class DescribeOperatingSystemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperatingSystems", elemType: shared.OperatingSystem })
  operatingSystems?: OperatingSystem[];
}
