import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentConfig
/** 
 * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
**/
export class ExperimentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentDisplayName" })
  trialComponentDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName?: string;
}
