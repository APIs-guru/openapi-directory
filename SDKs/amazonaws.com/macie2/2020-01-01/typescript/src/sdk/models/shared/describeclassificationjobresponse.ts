import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
import { LastRunErrorStatus } from "./lastrunerrorstatus";
import { ManagedDataIdentifierSelectorEnum } from "./manageddataidentifierselectorenum";
import { S3JobDefinition } from "./s3jobdefinition";
import { JobScheduleFrequency } from "./jobschedulefrequency";
import { Statistics } from "./statistics";
import { UserPausedDetails } from "./userpauseddetails";


export class DescribeClassificationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=customDataIdentifierIds" })
  customDataIdentifierIds?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=initialRun" })
  initialRun?: boolean;

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=jobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=jobType" })
  jobType?: JobTypeEnum;

  @Metadata({ data: "json, name=lastRunErrorStatus" })
  lastRunErrorStatus?: LastRunErrorStatus;

  @Metadata({ data: "json, name=lastRunTime" })
  lastRunTime?: Date;

  @Metadata({ data: "json, name=managedDataIdentifierIds" })
  managedDataIdentifierIds?: string[];

  @Metadata({ data: "json, name=managedDataIdentifierSelector" })
  managedDataIdentifierSelector?: ManagedDataIdentifierSelectorEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=s3JobDefinition" })
  s3JobDefinition?: S3JobDefinition;

  @Metadata({ data: "json, name=samplingPercentage" })
  samplingPercentage?: number;

  @Metadata({ data: "json, name=scheduleFrequency" })
  scheduleFrequency?: JobScheduleFrequency;

  @Metadata({ data: "json, name=statistics" })
  statistics?: Statistics;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=userPausedDetails" })
  userPausedDetails?: UserPausedDetails;
}
