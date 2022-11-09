import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStateEnum } from "./jobstateenum";
import { JobTypeEnum } from "./jobtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";


// JobListEntry
/** 
 * Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
**/
export class JobListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsMaster" })
  isMaster?: boolean;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobState" })
  jobState?: JobStateEnum;

  @Metadata({ data: "json, name=JobType" })
  jobType?: JobTypeEnum;

  @Metadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;
}
