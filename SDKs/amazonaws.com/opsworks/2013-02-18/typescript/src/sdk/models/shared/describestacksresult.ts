import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stack } from "./stack";



// DescribeStacksResult
/** 
 * Contains the response to a <code>DescribeStacks</code> request.
**/
export class DescribeStacksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Stacks", elemType: Stack })
  stacks?: Stack[];
}
