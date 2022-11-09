import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackSummary } from "./stacksummary";


// DescribeStackSummaryResult
/** 
 * Contains the response to a <code>DescribeStackSummary</code> request.
**/
export class DescribeStackSummaryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackSummary" })
  stackSummary?: StackSummary;
}
