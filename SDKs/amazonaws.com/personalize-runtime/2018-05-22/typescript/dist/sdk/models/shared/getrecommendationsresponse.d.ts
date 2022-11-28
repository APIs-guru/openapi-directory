import { SpeakeasyBase } from "../../../internal/utils";
import { PredictedItem } from "./predicteditem";
export declare class GetRecommendationsResponse extends SpeakeasyBase {
    itemList?: PredictedItem[];
    recommendationId?: string;
}
