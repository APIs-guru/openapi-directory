import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceError } from "./serviceerror";


// DescribeServiceErrorsResult
/** 
 * Contains the response to a <code>DescribeServiceErrors</code> request.
**/
export class DescribeServiceErrorsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceErrors", elemType: shared.ServiceError })
  serviceErrors?: ServiceError[];
}
