import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Service } from "./service";


// DescribeServicesResponse
/** 
 * The list of AWS services returned by the <a>DescribeServices</a> operation.
**/
export class DescribeServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=services", elemType: shared.Service })
  services?: Service[];
}
