import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.
**/
export declare class AccessControlList extends SpeakeasyBase {
    allowsPublicReadAccess?: boolean;
    allowsPublicWriteAccess?: boolean;
}
