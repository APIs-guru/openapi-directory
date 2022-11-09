import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrialComponentArtifact
/** 
 * <p>Represents an input or output artifact of a trial component. You specify <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a> request.</p> <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
**/
export class TrialComponentArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
