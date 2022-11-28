import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3BucketCriteriaForJob } from "./s3bucketcriteriaforjob";
import { S3BucketDefinitionForJob } from "./s3bucketdefinitionforjob";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
import { LastRunErrorStatus } from "./lastrunerrorstatus";
import { UserPausedDetails } from "./userpauseddetails";



// JobSummary
/** 
 * Provides information about a classification job, including the current status of the job.
**/
export class JobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketCriteria" })
  bucketCriteria?: S3BucketCriteriaForJob;

  @SpeakeasyMetadata({ data: "json, name=bucketDefinitions", elemType: S3BucketDefinitionForJob })
  bucketDefinitions?: S3BucketDefinitionForJob[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=jobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: JobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lastRunErrorStatus" })
  lastRunErrorStatus?: LastRunErrorStatus;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=userPausedDetails" })
  userPausedDetails?: UserPausedDetails;
}
