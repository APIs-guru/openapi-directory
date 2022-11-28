import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackSummary } from "./stacksummary";



// DescribeStackSummaryResult
/** 
 * Contains the response to a <code>DescribeStackSummary</code> request.
**/
export class DescribeStackSummaryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackSummary" })
  stackSummary?: StackSummary;
}
