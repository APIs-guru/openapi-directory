import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.
**/
export declare class TextTranslationJobFilter extends SpeakeasyBase {
    jobName?: string;
    jobStatus?: JobStatusEnum;
    submittedAfterTime?: Date;
    submittedBeforeTime?: Date;
}
