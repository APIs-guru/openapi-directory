import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionFilter } from "./dimensionfilter";

export enum DimensionFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    Or = "OR"
,    And = "AND"
}


// DimensionFilterClause
/** 
 * A group of dimension filters. Set the operator value to specify how the filters are logically combined.
**/
export class DimensionFilterClause extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.DimensionFilter })
  filters?: DimensionFilter[];

  @Metadata({ data: "json, name=operator" })
  operator?: DimensionFilterClauseOperatorEnum;
}
