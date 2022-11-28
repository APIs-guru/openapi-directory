import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateClassificationJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateClassificationJobRequestBodyJobTypeEnum {
    OneTime = "ONE_TIME",
    Scheduled = "SCHEDULED"
}

export enum CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum {
    All = "ALL",
    Exclude = "EXCLUDE",
    Include = "INCLUDE",
    None = "NONE"
}


// CreateClassificationJobRequestBodyS3JobDefinition
/** 
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
**/
export class CreateClassificationJobRequestBodyS3JobDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketCriteria" })
  bucketCriteria?: shared.S3BucketCriteriaForJob;

  @SpeakeasyMetadata({ data: "json, name=bucketDefinitions", elemType: shared.S3BucketDefinitionForJob })
  bucketDefinitions?: shared.S3BucketDefinitionForJob[];

  @SpeakeasyMetadata({ data: "json, name=scoping" })
  scoping?: shared.Scoping;
}


// CreateClassificationJobRequestBodyScheduleFrequency
/** 
 * Specifies the recurrence pattern for running a classification job.
**/
export class CreateClassificationJobRequestBodyScheduleFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailySchedule" })
  dailySchedule?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=monthlySchedule" })
  monthlySchedule?: shared.MonthlySchedule;

  @SpeakeasyMetadata({ data: "json, name=weeklySchedule" })
  weeklySchedule?: shared.WeeklySchedule;
}


export class CreateClassificationJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=customDataIdentifierIds" })
  customDataIdentifierIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=initialRun" })
  initialRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType: CreateClassificationJobRequestBodyJobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=managedDataIdentifierIds" })
  managedDataIdentifierIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=managedDataIdentifierSelector" })
  managedDataIdentifierSelector?: CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=s3JobDefinition" })
  s3JobDefinition: CreateClassificationJobRequestBodyS3JobDefinition;

  @SpeakeasyMetadata({ data: "json, name=samplingPercentage" })
  samplingPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduleFrequency" })
  scheduleFrequency?: CreateClassificationJobRequestBodyScheduleFrequency;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateClassificationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateClassificationJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateClassificationJobRequestBody;
}


export class CreateClassificationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createClassificationJobResponse?: shared.CreateClassificationJobResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
