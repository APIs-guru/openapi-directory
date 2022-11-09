import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3ObjectDetails
/** 
 * Details about an Amazon S3 object.
**/
export class AwsS3ObjectDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=ETag" })
  eTag?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=SSEKMSKeyId" })
  ssekmsKeyId?: string;

  @Metadata({ data: "json, name=ServerSideEncryption" })
  serverSideEncryption?: string;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;
}
