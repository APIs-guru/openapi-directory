import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.
**/
export declare class CriterionAdditionalProperties extends SpeakeasyBase {
    eq?: string[];
    eqExactMatch?: string[];
    gt?: number;
    gte?: number;
    lt?: number;
    lte?: number;
    neq?: string[];
}
