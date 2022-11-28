import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBatchPredictionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;
}
