import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Callback" })
  callback?: CallbackStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: ConditionStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=Lambda" })
  lambda?: LambdaStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=Model" })
  model?: ModelStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJob" })
  processingJob?: ProcessingJobStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=RegisterModel" })
  registerModel?: RegisterModelStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=TrainingJob" })
  trainingJob?: TrainingJobStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=TransformJob" })
  transformJob?: TransformJobStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=TuningJob" })
  tuningJob?: TuningJobStepMetaData;
}
