import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalExplanation } from "./globalexplanation";
import { DataSplitResult } from "./datasplitresult";
import { EvaluationMetrics } from "./evaluationmetrics";
import { IterationResult } from "./iterationresult";
import { TrainingOptions } from "./trainingoptions";



// TrainingRun
/** 
 * Information about a single training query run for the model.
**/
export class TrainingRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classLevelGlobalExplanations", elemType: GlobalExplanation })
  classLevelGlobalExplanations?: GlobalExplanation[];

  @SpeakeasyMetadata({ data: "json, name=dataSplitResult" })
  dataSplitResult?: DataSplitResult;

  @SpeakeasyMetadata({ data: "json, name=evaluationMetrics" })
  evaluationMetrics?: EvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=modelLevelGlobalExplanation" })
  modelLevelGlobalExplanation?: GlobalExplanation;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: IterationResult })
  results?: IterationResult[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingOptions" })
  trainingOptions?: TrainingOptions;

  @SpeakeasyMetadata({ data: "json, name=trainingStartTime" })
  trainingStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vertexAiModelId" })
  vertexAiModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=vertexAiModelVersion" })
  vertexAiModelVersion?: string;
}


// TrainingRunInput
/** 
 * Information about a single training query run for the model.
**/
export class TrainingRunInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSplitResult" })
  dataSplitResult?: DataSplitResult;

  @SpeakeasyMetadata({ data: "json, name=evaluationMetrics" })
  evaluationMetrics?: EvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=modelLevelGlobalExplanation" })
  modelLevelGlobalExplanation?: GlobalExplanation;

  @SpeakeasyMetadata({ data: "json, name=trainingOptions" })
  trainingOptions?: TrainingOptions;

  @SpeakeasyMetadata({ data: "json, name=vertexAiModelId" })
  vertexAiModelId?: string;
}
