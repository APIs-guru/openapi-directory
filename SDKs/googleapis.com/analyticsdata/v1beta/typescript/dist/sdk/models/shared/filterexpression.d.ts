import { SpeakeasyBase } from "../../../internal/utils";
import { FilterExpressionList } from "./filterexpressionlist";
import { Filter } from "./filter";
/**
 * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
**/
export declare class FilterExpression extends SpeakeasyBase {
    andGroup?: FilterExpressionList;
    filter?: Filter;
    notExpression?: FilterExpression;
    orGroup?: FilterExpressionList;
}
