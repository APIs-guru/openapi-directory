import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserLockout } from "./userlockout";


// UpdateLoginPasswordPolicies
/** 
 * Request model for updating login password policies
**/
export class UpdateLoginPasswordPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=characterRules" })
  characterRules?: CharacterRules;

  @Metadata({ data: "json, name=enforceLoginPasswordChange" })
  enforceLoginPasswordChange?: boolean;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;

  @Metadata({ data: "json, name=numberOfArchivedPasswords" })
  numberOfArchivedPasswords?: number;

  @Metadata({ data: "json, name=passwordExpiration" })
  passwordExpiration?: PasswordExpiration;

  @Metadata({ data: "json, name=rejectDictionaryWords" })
  rejectDictionaryWords?: boolean;

  @Metadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns?: boolean;

  @Metadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo?: boolean;

  @Metadata({ data: "json, name=userLockout" })
  userLockout?: UserLockout;
}
