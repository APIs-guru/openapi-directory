import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Evaluation } from "./evaluation";


// DescribeEvaluationsOutput
/** 
 * Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.
**/
export class DescribeEvaluationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Results", elemType: shared.Evaluation })
  results?: Evaluation[];
}
