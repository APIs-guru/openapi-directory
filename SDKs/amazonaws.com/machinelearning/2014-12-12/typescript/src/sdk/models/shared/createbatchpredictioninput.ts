import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBatchPredictionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchPredictionDataSourceId" })
  batchPredictionDataSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;

  @SpeakeasyMetadata({ data: "json, name=BatchPredictionName" })
  batchPredictionName?: string;

  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @SpeakeasyMetadata({ data: "json, name=OutputUri" })
  outputUri: string;
}
