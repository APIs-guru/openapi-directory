import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stack } from "./stack";


// DescribeStacksResult
/** 
 * Contains the response to a <code>DescribeStacks</code> request.
**/
export class DescribeStacksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Stacks", elemType: shared.Stack })
  stacks?: Stack[];
}
