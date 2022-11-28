import { SpeakeasyBase } from "../../../internal/utils";
import { BlockPublicAccess } from "./blockpublicaccess";
/**
 * Provides information about the account-level permissions settings that apply to an S3 bucket.
**/
export declare class AccountLevelPermissions extends SpeakeasyBase {
    blockPublicAccess?: BlockPublicAccess;
}
