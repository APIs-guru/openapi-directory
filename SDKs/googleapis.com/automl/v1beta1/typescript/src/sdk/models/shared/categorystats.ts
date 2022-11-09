import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SingleCategoryStats } from "./singlecategorystats";


// CategoryStats
/** 
 * The data statistics of a series of CATEGORY values.
**/
export class CategoryStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=topCategoryStats", elemType: shared.SingleCategoryStats })
  topCategoryStats?: SingleCategoryStats[];
}
