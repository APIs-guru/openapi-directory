import { SpeakeasyBase } from "../../../internal/utils";
import { S3BucketCriteriaForJob } from "./s3bucketcriteriaforjob";
import { S3BucketDefinitionForJob } from "./s3bucketdefinitionforjob";
import { Scoping } from "./scoping";
/**
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
**/
export declare class S3JobDefinition extends SpeakeasyBase {
    bucketCriteria?: S3BucketCriteriaForJob;
    bucketDefinitions?: S3BucketDefinitionForJob[];
    scoping?: Scoping;
}
