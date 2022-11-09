import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PredictedItem } from "./predicteditem";
export declare class GetPersonalizedRankingResponse extends SpeakeasyBase {
    personalizedRanking?: PredictedItem[];
    recommendationId?: string;
}
