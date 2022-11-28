import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
**/
export declare class ExperimentConfig extends SpeakeasyBase {
    experimentName?: string;
    trialComponentDisplayName?: string;
    trialName?: string;
}
