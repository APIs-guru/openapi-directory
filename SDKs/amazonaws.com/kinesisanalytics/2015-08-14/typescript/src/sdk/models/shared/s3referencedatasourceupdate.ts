import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ReferenceDataSourceUpdate
/** 
 * Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
**/
export class S3ReferenceDataSourceUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate?: string;

  @Metadata({ data: "json, name=FileKeyUpdate" })
  fileKeyUpdate?: string;

  @Metadata({ data: "json, name=ReferenceRoleARNUpdate" })
  referenceRoleArnUpdate?: string;
}
