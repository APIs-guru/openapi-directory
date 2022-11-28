import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SingleCategoryStats } from "./singlecategorystats";



// CategoryStats
/** 
 * The data statistics of a series of CATEGORY values.
**/
export class CategoryStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topCategoryStats", elemType: SingleCategoryStats })
  topCategoryStats?: SingleCategoryStats[];
}
