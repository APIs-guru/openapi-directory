import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";
export declare enum DimensionFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Or = "OR",
    And = "AND"
}
/**
 * A group of dimension filters. Set the operator value to specify how the filters are logically combined.
**/
export declare class DimensionFilterClause extends SpeakeasyBase {
    filters?: DimensionFilter[];
    operator?: DimensionFilterClauseOperatorEnum;
}
