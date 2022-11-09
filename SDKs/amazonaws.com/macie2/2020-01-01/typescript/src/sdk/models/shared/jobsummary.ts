import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=bucketCriteria" })
  bucketCriteria?: S3BucketCriteriaForJob;

  @Metadata({ data: "json, name=bucketDefinitions", elemType: shared.S3BucketDefinitionForJob })
  bucketDefinitions?: S3BucketDefinitionForJob[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=jobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=jobType" })
  jobType?: JobTypeEnum;

  @Metadata({ data: "json, name=lastRunErrorStatus" })
  lastRunErrorStatus?: LastRunErrorStatus;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=userPausedDetails" })
  userPausedDetails?: UserPausedDetails;
}
