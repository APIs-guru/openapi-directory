import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";



// DescribeEvaluationsOutput
/** 
 * Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.
**/
export class DescribeEvaluationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: Evaluation })
  results?: Evaluation[];
}
