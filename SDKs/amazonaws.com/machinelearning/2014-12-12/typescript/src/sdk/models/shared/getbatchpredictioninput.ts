import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBatchPredictionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;
}
