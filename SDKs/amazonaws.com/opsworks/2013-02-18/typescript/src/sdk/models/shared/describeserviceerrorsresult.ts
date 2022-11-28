import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceError } from "./serviceerror";



// DescribeServiceErrorsResult
/** 
 * Contains the response to a <code>DescribeServiceErrors</code> request.
**/
export class DescribeServiceErrorsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceErrors", elemType: ServiceError })
  serviceErrors?: ServiceError[];
}
