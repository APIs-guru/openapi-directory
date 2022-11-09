import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallbackStepMetadata } from "./callbackstepmetadata";
import { ConditionStepMetadata } from "./conditionstepmetadata";
import { LambdaStepMetadata } from "./lambdastepmetadata";
import { ModelStepMetadata } from "./modelstepmetadata";
import { ProcessingJobStepMetadata } from "./processingjobstepmetadata";
import { RegisterModelStepMetadata } from "./registermodelstepmetadata";
import { TrainingJobStepMetadata } from "./trainingjobstepmetadata";
import { TransformJobStepMetadata } from "./transformjobstepmetadata";
import { TuningJobStepMetaData } from "./tuningjobstepmetadata";


// PipelineExecutionStepMetadata
/** 
 * Metadata for a step execution.
**/
export class PipelineExecutionStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Callback" })
  callback?: CallbackStepMetadata;

  @Metadata({ data: "json, name=Condition" })
  condition?: ConditionStepMetadata;

  @Metadata({ data: "json, name=Lambda" })
  lambda?: LambdaStepMetadata;

  @Metadata({ data: "json, name=Model" })
  model?: ModelStepMetadata;

  @Metadata({ data: "json, name=ProcessingJob" })
  processingJob?: ProcessingJobStepMetadata;

  @Metadata({ data: "json, name=RegisterModel" })
  registerModel?: RegisterModelStepMetadata;

  @Metadata({ data: "json, name=TrainingJob" })
  trainingJob?: TrainingJobStepMetadata;

  @Metadata({ data: "json, name=TransformJob" })
  transformJob?: TransformJobStepMetadata;

  @Metadata({ data: "json, name=TuningJob" })
  tuningJob?: TuningJobStepMetaData;
}
