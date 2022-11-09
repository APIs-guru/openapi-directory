import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBatchPredictionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;
}
