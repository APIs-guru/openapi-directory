import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";
import { NestedFilters } from "./nestedfilters";
import { BooleanOperatorEnum } from "./booleanoperatorenum";
import { SearchExpression } from "./searchexpression";


// SearchExpression
/** 
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul>
**/
export class SearchExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=NestedFilters", elemType: shared.NestedFilters })
  nestedFilters?: NestedFilters[];

  @Metadata({ data: "json, name=Operator" })
  operator?: BooleanOperatorEnum;

  @Metadata({ data: "json, name=SubExpressions", elemType: shared.SearchExpression })
  subExpressions?: SearchExpression[];
}
