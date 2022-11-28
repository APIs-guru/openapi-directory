import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IsDefinedInJobEnum } from "./isdefinedinjobenum";
import { IsMonitoredByJobEnum } from "./ismonitoredbyjobenum";



// JobDetails
/** 
 * Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
**/
export class JobDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDefinedInJob" })
  isDefinedInJob?: IsDefinedInJobEnum;

  @SpeakeasyMetadata({ data: "json, name=isMonitoredByJob" })
  isMonitoredByJob?: IsMonitoredByJobEnum;

  @SpeakeasyMetadata({ data: "json, name=lastJobId" })
  lastJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastJobRunTime" })
  lastJobRunTime?: Date;
}
