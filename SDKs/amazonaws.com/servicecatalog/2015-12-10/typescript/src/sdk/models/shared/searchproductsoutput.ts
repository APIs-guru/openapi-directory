import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductViewAggregationValue } from "./productviewaggregationvalue";
import { ProductViewSummary } from "./productviewsummary";


export class SearchProductsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProductViewAggregations", elemType: shared.ProductViewAggregationValue, elemDepth: 2 })
  productViewAggregations?: Map<string, ProductViewAggregationValue[]>;

  @Metadata({ data: "json, name=ProductViewSummaries", elemType: shared.ProductViewSummary })
  productViewSummaries?: ProductViewSummary[];
}
