import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredictedItem } from "./predicteditem";



export class GetPersonalizedRankingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalizedRanking", elemType: PredictedItem })
  personalizedRanking?: PredictedItem[];

  @SpeakeasyMetadata({ data: "json, name=recommendationId" })
  recommendationId?: string;
}
