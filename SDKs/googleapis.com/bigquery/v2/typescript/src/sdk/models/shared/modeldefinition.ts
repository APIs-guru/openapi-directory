import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BqmlTrainingRun } from "./bqmltrainingrun";



// ModelDefinitionModelOptions
/** 
 * [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
**/
export class ModelDefinitionModelOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=lossType" })
  lossType?: string;

  @SpeakeasyMetadata({ data: "json, name=modelType" })
  modelType?: string;
}


export class ModelDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modelOptions" })
  modelOptions?: ModelDefinitionModelOptions;

  @SpeakeasyMetadata({ data: "json, name=trainingRuns", elemType: BqmlTrainingRun })
  trainingRuns?: BqmlTrainingRun[];
}
