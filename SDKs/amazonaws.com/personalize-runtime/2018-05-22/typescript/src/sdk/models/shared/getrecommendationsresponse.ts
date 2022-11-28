import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredictedItem } from "./predicteditem";



export class GetRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemList", elemType: PredictedItem })
  itemList?: PredictedItem[];

  @SpeakeasyMetadata({ data: "json, name=recommendationId" })
  recommendationId?: string;
}
