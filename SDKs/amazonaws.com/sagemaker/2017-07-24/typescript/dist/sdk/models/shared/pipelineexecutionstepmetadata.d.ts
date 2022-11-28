import { SpeakeasyBase } from "../../../internal/utils";
import { CallbackStepMetadata } from "./callbackstepmetadata";
import { ConditionStepMetadata } from "./conditionstepmetadata";
import { LambdaStepMetadata } from "./lambdastepmetadata";
import { ModelStepMetadata } from "./modelstepmetadata";
import { ProcessingJobStepMetadata } from "./processingjobstepmetadata";
import { RegisterModelStepMetadata } from "./registermodelstepmetadata";
import { TrainingJobStepMetadata } from "./trainingjobstepmetadata";
import { TransformJobStepMetadata } from "./transformjobstepmetadata";
import { TuningJobStepMetaData } from "./tuningjobstepmetadata";
/**
 * Metadata for a step execution.
**/
export declare class PipelineExecutionStepMetadata extends SpeakeasyBase {
    callback?: CallbackStepMetadata;
    condition?: ConditionStepMetadata;
    lambda?: LambdaStepMetadata;
    model?: ModelStepMetadata;
    processingJob?: ProcessingJobStepMetadata;
    registerModel?: RegisterModelStepMetadata;
    trainingJob?: TrainingJobStepMetadata;
    transformJob?: TransformJobStepMetadata;
    tuningJob?: TuningJobStepMetaData;
}
