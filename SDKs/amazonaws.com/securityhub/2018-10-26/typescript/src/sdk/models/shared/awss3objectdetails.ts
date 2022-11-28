import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3ObjectDetails
/** 
 * Details about an Amazon S3 object.
**/
export class AwsS3ObjectDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=SSEKMSKeyId" })
  ssekmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerSideEncryption" })
  serverSideEncryption?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;
}
