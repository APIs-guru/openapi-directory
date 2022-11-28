import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserInfo } from "./userinfo";
import { UserLockout } from "./userlockout";



// LoginPasswordPolicies
/** 
 * Login password policies
**/
export class LoginPasswordPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterRules" })
  characterRules: CharacterRules;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfArchivedPasswords" })
  numberOfArchivedPasswords: number;

  @SpeakeasyMetadata({ data: "json, name=passwordExpiration" })
  passwordExpiration: PasswordExpiration;

  @SpeakeasyMetadata({ data: "json, name=rejectDictionaryWords" })
  rejectDictionaryWords: boolean;

  @SpeakeasyMetadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns: boolean;

  @SpeakeasyMetadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo: boolean;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=userLockout" })
  userLockout: UserLockout;
}
