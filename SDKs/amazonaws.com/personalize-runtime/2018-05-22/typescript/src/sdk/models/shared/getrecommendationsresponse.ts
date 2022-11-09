import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PredictedItem } from "./predicteditem";


export class GetRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemList", elemType: shared.PredictedItem })
  itemList?: PredictedItem[];

  @Metadata({ data: "json, name=recommendationId" })
  recommendationId?: string;
}
