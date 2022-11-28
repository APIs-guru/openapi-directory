import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ReferenceDataSourceUpdate
/** 
 * Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
**/
export class S3ReferenceDataSourceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=FileKeyUpdate" })
  fileKeyUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=ReferenceRoleARNUpdate" })
  referenceRoleArnUpdate?: string;
}
