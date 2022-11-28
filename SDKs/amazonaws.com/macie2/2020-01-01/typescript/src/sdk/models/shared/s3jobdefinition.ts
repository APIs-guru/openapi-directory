import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3BucketCriteriaForJob } from "./s3bucketcriteriaforjob";
import { S3BucketDefinitionForJob } from "./s3bucketdefinitionforjob";
import { Scoping } from "./scoping";



// S3JobDefinition
/** 
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
**/
export class S3JobDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketCriteria" })
  bucketCriteria?: S3BucketCriteriaForJob;

  @SpeakeasyMetadata({ data: "json, name=bucketDefinitions", elemType: S3BucketDefinitionForJob })
  bucketDefinitions?: S3BucketDefinitionForJob[];

  @SpeakeasyMetadata({ data: "json, name=scoping" })
  scoping?: Scoping;
}
