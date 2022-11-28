import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateClassificationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateClassificationJobRequestBodyJobTypeEnum {
    OneTime = "ONE_TIME",
    Scheduled = "SCHEDULED"
}
export declare enum CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum {
    All = "ALL",
    Exclude = "EXCLUDE",
    Include = "INCLUDE",
    None = "NONE"
}
/**
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
**/
export declare class CreateClassificationJobRequestBodyS3JobDefinition extends SpeakeasyBase {
    bucketCriteria?: shared.S3BucketCriteriaForJob;
    bucketDefinitions?: shared.S3BucketDefinitionForJob[];
    scoping?: shared.Scoping;
}
/**
 * Specifies the recurrence pattern for running a classification job.
**/
export declare class CreateClassificationJobRequestBodyScheduleFrequency extends SpeakeasyBase {
    dailySchedule?: Map<string, any>;
    monthlySchedule?: shared.MonthlySchedule;
    weeklySchedule?: shared.WeeklySchedule;
}
export declare class CreateClassificationJobRequestBody extends SpeakeasyBase {
    clientToken: string;
    customDataIdentifierIds?: string[];
    description?: string;
    initialRun?: boolean;
    jobType: CreateClassificationJobRequestBodyJobTypeEnum;
    managedDataIdentifierIds?: string[];
    managedDataIdentifierSelector?: CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum;
    name: string;
    s3JobDefinition: CreateClassificationJobRequestBodyS3JobDefinition;
    samplingPercentage?: number;
    scheduleFrequency?: CreateClassificationJobRequestBodyScheduleFrequency;
    tags?: Map<string, string>;
}
export declare class CreateClassificationJobRequest extends SpeakeasyBase {
    headers: CreateClassificationJobHeaders;
    request: CreateClassificationJobRequestBody;
}
export declare class CreateClassificationJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createClassificationJobResponse?: shared.CreateClassificationJobResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
