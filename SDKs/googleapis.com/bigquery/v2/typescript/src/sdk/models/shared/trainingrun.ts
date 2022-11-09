import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalExplanation } from "./globalexplanation";
import { DataSplitResult } from "./datasplitresult";
import { EvaluationMetrics } from "./evaluationmetrics";
import { GlobalExplanation } from "./globalexplanation";
import { IterationResult } from "./iterationresult";
import { TrainingOptions } from "./trainingoptions";


// TrainingRun
/** 
 * Information about a single training query run for the model.
**/
export class TrainingRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=classLevelGlobalExplanations", elemType: shared.GlobalExplanation })
  classLevelGlobalExplanations?: GlobalExplanation[];

  @Metadata({ data: "json, name=dataSplitResult" })
  dataSplitResult?: DataSplitResult;

  @Metadata({ data: "json, name=evaluationMetrics" })
  evaluationMetrics?: EvaluationMetrics;

  @Metadata({ data: "json, name=modelLevelGlobalExplanation" })
  modelLevelGlobalExplanation?: GlobalExplanation;

  @Metadata({ data: "json, name=results", elemType: shared.IterationResult })
  results?: IterationResult[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=trainingOptions" })
  trainingOptions?: TrainingOptions;

  @Metadata({ data: "json, name=trainingStartTime" })
  trainingStartTime?: string;

  @Metadata({ data: "json, name=vertexAiModelId" })
  vertexAiModelId?: string;

  @Metadata({ data: "json, name=vertexAiModelVersion" })
  vertexAiModelVersion?: string;
}
