import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingJob } from "./processingjob";
import { TrainingJob } from "./trainingjob";
import { TransformJob } from "./transformjob";



// TrialComponentSourceDetail
/** 
 * Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.
**/
export class TrialComponentSourceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProcessingJob" })
  processingJob?: ProcessingJob;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJob" })
  trainingJob?: TrainingJob;

  @SpeakeasyMetadata({ data: "json, name=TransformJob" })
  transformJob?: TransformJob;
}
