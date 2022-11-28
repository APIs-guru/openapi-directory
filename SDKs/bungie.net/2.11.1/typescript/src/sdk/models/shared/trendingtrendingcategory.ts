import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResultOfTrendingEntry } from "./searchresultoftrendingentry";



export class TrendingTrendingCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryId?: string;

  @SpeakeasyMetadata()
  categoryName?: string;

  @SpeakeasyMetadata()
  entries?: SearchResultOfTrendingEntry;
}
