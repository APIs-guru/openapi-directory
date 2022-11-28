import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewAggregationValue } from "./productviewaggregationvalue";
import { ProductViewSummary } from "./productviewsummary";



export class SearchProductsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductViewAggregations", elemType: ProductViewAggregationValue, elemDepth: 2 })
  productViewAggregations?: Map<string, ProductViewAggregationValue[]>;

  @SpeakeasyMetadata({ data: "json, name=ProductViewSummaries", elemType: ProductViewSummary })
  productViewSummaries?: ProductViewSummary[];
}
