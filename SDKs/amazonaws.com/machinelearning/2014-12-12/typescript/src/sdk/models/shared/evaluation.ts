import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PerformanceMetrics } from "./performancemetrics";
import { EntityStatusEnum } from "./entitystatusenum";


// Evaluation
/** 
 * <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>
**/
export class Evaluation extends SpeakeasyBase {
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
