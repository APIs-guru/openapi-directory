import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBatchPredictionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchPredictionDataSourceId" })
  batchPredictionDataSourceId: string;

  @Metadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId: string;

  @Metadata({ data: "json, name=BatchPredictionName" })
  batchPredictionName?: string;

  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @Metadata({ data: "json, name=OutputUri" })
  outputUri: string;
}
