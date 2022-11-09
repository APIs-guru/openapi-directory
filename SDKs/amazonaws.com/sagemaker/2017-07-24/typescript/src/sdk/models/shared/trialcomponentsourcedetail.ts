import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingJob } from "./processingjob";
import { TrainingJob } from "./trainingjob";
import { TransformJob } from "./transformjob";


// TrialComponentSourceDetail
/** 
 * Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.
**/
export class TrialComponentSourceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProcessingJob" })
  processingJob?: ProcessingJob;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @Metadata({ data: "json, name=TrainingJob" })
  trainingJob?: TrainingJob;

  @Metadata({ data: "json, name=TransformJob" })
  transformJob?: TransformJob;
}
