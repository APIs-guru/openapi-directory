import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductViewAggregationValue } from "./productviewaggregationvalue";
import { ProductViewSummary } from "./productviewsummary";
export declare class SearchProductsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    productViewAggregations?: Map<string, ProductViewAggregationValue[]>;
    productViewSummaries?: ProductViewSummary[];
}
