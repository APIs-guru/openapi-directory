import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessControlList
/** 
 * Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.
**/
export class AccessControlList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowsPublicReadAccess" })
  allowsPublicReadAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowsPublicWriteAccess" })
  allowsPublicWriteAccess?: boolean;
}
