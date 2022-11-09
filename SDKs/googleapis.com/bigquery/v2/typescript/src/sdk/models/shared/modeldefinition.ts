import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BqmlTrainingRun } from "./bqmltrainingrun";


// ModelDefinitionModelOptions
/** 
 * [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
**/
export class ModelDefinitionModelOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=lossType" })
  lossType?: string;

  @Metadata({ data: "json, name=modelType" })
  modelType?: string;
}


export class ModelDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=modelOptions" })
  modelOptions?: ModelDefinitionModelOptions;

  @Metadata({ data: "json, name=trainingRuns", elemType: shared.BqmlTrainingRun })
  trainingRuns?: BqmlTrainingRun[];
}
