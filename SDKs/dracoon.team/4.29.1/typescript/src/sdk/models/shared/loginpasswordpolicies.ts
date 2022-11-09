import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserInfo } from "./userinfo";
import { UserLockout } from "./userlockout";


// LoginPasswordPolicies
/** 
 * Login password policies
**/
export class LoginPasswordPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=characterRules" })
  characterRules: CharacterRules;

  @Metadata({ data: "json, name=minLength" })
  minLength: number;

  @Metadata({ data: "json, name=numberOfArchivedPasswords" })
  numberOfArchivedPasswords: number;

  @Metadata({ data: "json, name=passwordExpiration" })
  passwordExpiration: PasswordExpiration;

  @Metadata({ data: "json, name=rejectDictionaryWords" })
  rejectDictionaryWords: boolean;

  @Metadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns: boolean;

  @Metadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo: boolean;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy: UserInfo;

  @Metadata({ data: "json, name=userLockout" })
  userLockout: UserLockout;
}
