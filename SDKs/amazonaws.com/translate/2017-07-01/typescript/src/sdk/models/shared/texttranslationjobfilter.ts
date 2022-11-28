import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



// TextTranslationJobFilter
/** 
 * Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.
**/
export class TextTranslationJobFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmittedAfterTime" })
  submittedAfterTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubmittedBeforeTime" })
  submittedBeforeTime?: Date;
}
