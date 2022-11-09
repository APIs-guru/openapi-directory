import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessControlList
/** 
 * Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.
**/
export class AccessControlList extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowsPublicReadAccess" })
  allowsPublicReadAccess?: boolean;

  @Metadata({ data: "json, name=allowsPublicWriteAccess" })
  allowsPublicWriteAccess?: boolean;
}
