import { SpeakeasyBase } from "../../../internal/utils";
import { IsDefinedInJobEnum } from "./isdefinedinjobenum";
import { IsMonitoredByJobEnum } from "./ismonitoredbyjobenum";
/**
 * Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
**/
export declare class JobDetails extends SpeakeasyBase {
    isDefinedInJob?: IsDefinedInJobEnum;
    isMonitoredByJob?: IsMonitoredByJobEnum;
    lastJobId?: string;
    lastJobRunTime?: Date;
}
