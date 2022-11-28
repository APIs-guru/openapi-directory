import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
import { LastRunErrorStatus } from "./lastrunerrorstatus";
import { ManagedDataIdentifierSelectorEnum } from "./manageddataidentifierselectorenum";
import { S3JobDefinition } from "./s3jobdefinition";
import { JobScheduleFrequency } from "./jobschedulefrequency";
import { Statistics } from "./statistics";
import { UserPausedDetails } from "./userpauseddetails";



export class DescribeClassificationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=customDataIdentifierIds" })
  customDataIdentifierIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=initialRun" })
  initialRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=jobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: JobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lastRunErrorStatus" })
  lastRunErrorStatus?: LastRunErrorStatus;

  @SpeakeasyMetadata({ data: "json, name=lastRunTime" })
  lastRunTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=managedDataIdentifierIds" })
  managedDataIdentifierIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=managedDataIdentifierSelector" })
  managedDataIdentifierSelector?: ManagedDataIdentifierSelectorEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=s3JobDefinition" })
  s3JobDefinition?: S3JobDefinition;

  @SpeakeasyMetadata({ data: "json, name=samplingPercentage" })
  samplingPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduleFrequency" })
  scheduleFrequency?: JobScheduleFrequency;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: Statistics;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=userPausedDetails" })
  userPausedDetails?: UserPausedDetails;
}
