import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserInfo } from "./userinfo";
import { UserLockout } from "./userlockout";
/**
 * Login password policies
**/
export declare class LoginPasswordPolicies extends SpeakeasyBase {
    characterRules: CharacterRules;
    minLength: number;
    numberOfArchivedPasswords: number;
    passwordExpiration: PasswordExpiration;
    rejectDictionaryWords: boolean;
    rejectKeyboardPatterns: boolean;
    rejectUserInfo: boolean;
    updatedAt: Date;
    updatedBy: UserInfo;
    userLockout: UserLockout;
}
