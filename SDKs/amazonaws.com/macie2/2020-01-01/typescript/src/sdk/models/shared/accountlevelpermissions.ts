import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlockPublicAccess } from "./blockpublicaccess";


// AccountLevelPermissions
/** 
 * Provides information about the account-level permissions settings that apply to an S3 bucket.
**/
export class AccountLevelPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockPublicAccess" })
  blockPublicAccess?: BlockPublicAccess;
}
