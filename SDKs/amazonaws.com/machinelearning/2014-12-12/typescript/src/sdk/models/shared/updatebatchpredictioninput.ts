import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateBatchPredictionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;

  @Metadata({ data: "json, name=BatchPredictionName" })
  batchPredictionName: string;
}
