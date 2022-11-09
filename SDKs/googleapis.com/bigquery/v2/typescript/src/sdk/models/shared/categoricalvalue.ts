import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryCount } from "./categorycount";


// CategoricalValue
/** 
 * Representative value of a categorical feature.
**/
export class CategoricalValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryCounts", elemType: shared.CategoryCount })
  categoryCounts?: CategoryCount[];
}
