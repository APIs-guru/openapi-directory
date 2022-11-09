import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStatusEnum } from "./entitystatusenum";


// BatchPrediction
/** 
 * <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>
**/
export class BatchPrediction extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchPredictionDataSourceId" })
  batchPredictionDataSourceId?: string;

  @Metadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId?: string;

  @Metadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @Metadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @Metadata({ data: "json, name=InputDataLocationS3" })
  inputDataLocationS3?: string;

  @Metadata({ data: "json, name=InvalidRecordCount" })
  invalidRecordCount?: number;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OutputUri" })
  outputUri?: string;

  @Metadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
