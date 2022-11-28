import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryCount } from "./categorycount";



// CategoricalValue
/** 
 * Representative value of a categorical feature.
**/
export class CategoricalValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryCounts", elemType: CategoryCount })
  categoryCounts?: CategoryCount[];
}
