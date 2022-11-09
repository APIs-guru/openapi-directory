import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=allowsUnencryptedObjectUploads" })
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploadsEnum;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=defaultServerSideEncryption" })
  defaultServerSideEncryption?: ServerSideEncryption;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: S3BucketOwner;

  @Metadata({ data: "json, name=publicAccess" })
  publicAccess?: BucketPublicAccess;

  @Metadata({ data: "json, name=tags", elemType: shared.KeyValuePair })
  tags?: KeyValuePair[];
}
