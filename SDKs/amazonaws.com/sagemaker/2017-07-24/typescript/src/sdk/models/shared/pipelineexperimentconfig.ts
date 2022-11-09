import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineExperimentConfig
/** 
 * Specifies the names of the experiment and trial created by a pipeline.
**/
export class PipelineExperimentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @Metadata({ data: "json, name=TrialName" })
  trialName?: string;
}
