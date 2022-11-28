import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityStatusEnum } from "./entitystatusenum";



// BatchPrediction
/** 
 * <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>
**/
export class BatchPrediction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchPredictionDataSourceId" })
  batchPredictionDataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @SpeakeasyMetadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataLocationS3" })
  inputDataLocationS3?: string;

  @SpeakeasyMetadata({ data: "json, name=InvalidRecordCount" })
  invalidRecordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
