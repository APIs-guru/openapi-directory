import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateClassificationJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateClassificationJobRequestBodyJobTypeEnum {
    OneTime = "ONE_TIME"
,    Scheduled = "SCHEDULED"
}

export enum CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum {
    All = "ALL"
,    Exclude = "EXCLUDE"
,    Include = "INCLUDE"
,    None = "NONE"
}


// CreateClassificationJobRequestBodyS3JobDefinition
/** 
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
**/
export class CreateClassificationJobRequestBodyS3JobDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketCriteria" })
  bucketCriteria?: shared.S3BucketCriteriaForJob;

  @Metadata({ data: "json, name=bucketDefinitions", elemType: shared.S3BucketDefinitionForJob })
  bucketDefinitions?: shared.S3BucketDefinitionForJob[];

  @Metadata({ data: "json, name=scoping" })
  scoping?: shared.Scoping;
}


// CreateClassificationJobRequestBodyScheduleFrequency
/** 
 * Specifies the recurrence pattern for running a classification job.
**/
export class CreateClassificationJobRequestBodyScheduleFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailySchedule" })
  dailySchedule?: Map<string, any>;

  @Metadata({ data: "json, name=monthlySchedule" })
  monthlySchedule?: shared.MonthlySchedule;

  @Metadata({ data: "json, name=weeklySchedule" })
  weeklySchedule?: shared.WeeklySchedule;
}


export class CreateClassificationJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=customDataIdentifierIds" })
  customDataIdentifierIds?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=initialRun" })
  initialRun?: boolean;

  @Metadata({ data: "json, name=jobType" })
  jobType: CreateClassificationJobRequestBodyJobTypeEnum;

  @Metadata({ data: "json, name=managedDataIdentifierIds" })
  managedDataIdentifierIds?: string[];

  @Metadata({ data: "json, name=managedDataIdentifierSelector" })
  managedDataIdentifierSelector?: CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=s3JobDefinition" })
  s3JobDefinition: CreateClassificationJobRequestBodyS3JobDefinition;

  @Metadata({ data: "json, name=samplingPercentage" })
  samplingPercentage?: number;

  @Metadata({ data: "json, name=scheduleFrequency" })
  scheduleFrequency?: CreateClassificationJobRequestBodyScheduleFrequency;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateClassificationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateClassificationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateClassificationJobRequestBody;
}


export class CreateClassificationJobResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createClassificationJobResponse?: shared.CreateClassificationJobResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
