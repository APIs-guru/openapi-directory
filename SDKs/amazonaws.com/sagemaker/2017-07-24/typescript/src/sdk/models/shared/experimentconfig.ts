import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentConfig
/** 
 * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
**/
export class ExperimentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @Metadata({ data: "json, name=TrialComponentDisplayName" })
  trialComponentDisplayName?: string;

  @Metadata({ data: "json, name=TrialName" })
  trialName?: string;
}
