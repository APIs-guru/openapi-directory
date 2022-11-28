import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerformanceMetrics } from "./performancemetrics";
import { EntityStatusEnum } from "./entitystatusenum";



// GetEvaluationOutput
/** 
 * Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.
**/
export class GetEvaluationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @SpeakeasyMetadata({ data: "json, name=EvaluationDataSourceId" })
  evaluationDataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=EvaluationId" })
  evaluationId?: string;

  @SpeakeasyMetadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataLocationS3" })
  inputDataLocationS3?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=LogUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PerformanceMetrics" })
  performanceMetrics?: PerformanceMetrics;

  @SpeakeasyMetadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;
}
