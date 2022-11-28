import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowsUnencryptedObjectUploadsEnum } from "./allowsunencryptedobjectuploadsenum";
import { ServerSideEncryption } from "./serversideencryption";
import { S3BucketOwner } from "./s3bucketowner";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { KeyValuePair } from "./keyvaluepair";



// S3Bucket
/** 
 * Provides information about the S3 bucket that a finding applies to.
**/
export class S3Bucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowsUnencryptedObjectUploads" })
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploadsEnum;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultServerSideEncryption" })
  defaultServerSideEncryption?: ServerSideEncryption;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: S3BucketOwner;

  @SpeakeasyMetadata({ data: "json, name=publicAccess" })
  publicAccess?: BucketPublicAccess;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: KeyValuePair })
  tags?: KeyValuePair[];
}
