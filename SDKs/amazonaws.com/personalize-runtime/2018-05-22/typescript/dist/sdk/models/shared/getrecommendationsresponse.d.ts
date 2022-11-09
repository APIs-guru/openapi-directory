import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PredictedItem } from "./predicteditem";
export declare class GetRecommendationsResponse extends SpeakeasyBase {
    itemList?: PredictedItem[];
    recommendationId?: string;
}
