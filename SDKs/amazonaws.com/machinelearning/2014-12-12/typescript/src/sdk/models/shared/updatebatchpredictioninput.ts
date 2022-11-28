import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateBatchPredictionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;

  @SpeakeasyMetadata({ data: "json, name=BatchPredictionName" })
  batchPredictionName: string;
}
