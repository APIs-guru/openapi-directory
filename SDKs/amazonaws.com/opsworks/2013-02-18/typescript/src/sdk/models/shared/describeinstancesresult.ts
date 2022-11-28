import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// DescribeInstancesResult
/** 
 * Contains the response to a <code>DescribeInstances</code> request.
**/
export class DescribeInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: Instance })
  instances?: Instance[];
}
