import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingJob } from "./processingjob";
import { TrainingJob } from "./trainingjob";
import { TransformJob } from "./transformjob";
/**
 * Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.
**/
export declare class TrialComponentSourceDetail extends SpeakeasyBase {
    processingJob?: ProcessingJob;
    sourceArn?: string;
    trainingJob?: TrainingJob;
    transformJob?: TransformJob;
}
