import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// TextTranslationJobFilter
/** 
 * Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.
**/
export class TextTranslationJobFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=SubmittedAfterTime" })
  submittedAfterTime?: Date;

  @Metadata({ data: "json, name=SubmittedBeforeTime" })
  submittedBeforeTime?: Date;
}
