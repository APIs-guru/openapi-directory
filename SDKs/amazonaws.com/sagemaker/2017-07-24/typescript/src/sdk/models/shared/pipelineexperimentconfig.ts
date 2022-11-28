import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineExperimentConfig
/** 
 * Specifies the names of the experiment and trial created by a pipeline.
**/
export class PipelineExperimentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName?: string;
}
