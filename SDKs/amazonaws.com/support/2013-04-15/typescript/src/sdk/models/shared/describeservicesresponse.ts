import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



// DescribeServicesResponse
/** 
 * The list of AWS services returned by the <a>DescribeServices</a> operation.
**/
export class DescribeServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services", elemType: Service })
  services?: Service[];
}
