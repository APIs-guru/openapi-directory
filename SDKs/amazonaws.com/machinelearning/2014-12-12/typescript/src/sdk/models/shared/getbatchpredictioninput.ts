import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBatchPredictionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;
}
