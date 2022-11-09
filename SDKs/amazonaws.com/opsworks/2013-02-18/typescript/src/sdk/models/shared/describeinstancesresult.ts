import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Instance } from "./instance";


// DescribeInstancesResult
/** 
 * Contains the response to a <code>DescribeInstances</code> request.
**/
export class DescribeInstancesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances", elemType: shared.Instance })
  instances?: Instance[];
}
