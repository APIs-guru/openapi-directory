import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrendingTrendingCategory } from "./trendingtrendingcategory";



export class TrendingTrendingCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TrendingTrendingCategory })
  categories?: TrendingTrendingCategory[];
}
