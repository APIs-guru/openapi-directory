import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ReferenceDataSourceDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
**/
export class S3ReferenceDataSourceDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @Metadata({ data: "json, name=FileKey" })
  fileKey: string;

  @Metadata({ data: "json, name=ReferenceRoleARN" })
  referenceRoleArn?: string;
}
