import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PerformanceMetrics } from "./performancemetrics";
import { EntityStatusEnum } from "./entitystatusenum";


// GetEvaluationOutput
/** 
 * Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.
**/
export class GetEvaluationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @Metadata({ data: "json, name=EvaluationDataSourceId" })
  evaluationDataSourceId?: string;

  @Metadata({ data: "json, name=EvaluationId" })
  evaluationId?: string;

  @Metadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @Metadata({ data: "json, name=InputDataLocationS3" })
  inputDataLocationS3?: string;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=LogUri" })
  logUri?: string;

  @Metadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PerformanceMetrics" })
  performanceMetrics?: PerformanceMetrics;

  @Metadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;
}
