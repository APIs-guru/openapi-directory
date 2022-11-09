import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IsDefinedInJobEnum } from "./isdefinedinjobenum";
import { IsMonitoredByJobEnum } from "./ismonitoredbyjobenum";


// JobDetails
/** 
 * Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
**/
export class JobDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDefinedInJob" })
  isDefinedInJob?: IsDefinedInJobEnum;

  @Metadata({ data: "json, name=isMonitoredByJob" })
  isMonitoredByJob?: IsMonitoredByJobEnum;

  @Metadata({ data: "json, name=lastJobId" })
  lastJobId?: string;

  @Metadata({ data: "json, name=lastJobRunTime" })
  lastJobRunTime?: Date;
}
