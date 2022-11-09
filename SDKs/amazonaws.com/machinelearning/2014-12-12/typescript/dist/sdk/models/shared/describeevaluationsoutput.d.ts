import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Evaluation } from "./evaluation";
/**
 * Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.
**/
export declare class DescribeEvaluationsOutput extends SpeakeasyBase {
    nextToken?: string;
    results?: Evaluation[];
}
