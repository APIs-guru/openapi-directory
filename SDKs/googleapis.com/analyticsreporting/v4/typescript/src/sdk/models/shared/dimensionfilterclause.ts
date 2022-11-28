import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";


export enum DimensionFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Or = "OR",
    And = "AND"
}


// DimensionFilterClause
/** 
 * A group of dimension filters. Set the operator value to specify how the filters are logically combined.
**/
export class DimensionFilterClause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: DimensionFilter })
  filters?: DimensionFilter[];

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: DimensionFilterClauseOperatorEnum;
}
