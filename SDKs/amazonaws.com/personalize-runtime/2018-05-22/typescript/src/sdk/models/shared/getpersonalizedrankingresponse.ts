import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PredictedItem } from "./predicteditem";


export class GetPersonalizedRankingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalizedRanking", elemType: shared.PredictedItem })
  personalizedRanking?: PredictedItem[];

  @Metadata({ data: "json, name=recommendationId" })
  recommendationId?: string;
}
