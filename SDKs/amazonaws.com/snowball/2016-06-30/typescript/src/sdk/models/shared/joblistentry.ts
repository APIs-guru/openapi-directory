import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStateEnum } from "./jobstateenum";
import { JobTypeEnum } from "./jobtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";



// JobListEntry
/** 
 * Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
**/
export class JobListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsMaster" })
  isMaster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobState" })
  jobState?: JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=JobType" })
  jobType?: JobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;
}
