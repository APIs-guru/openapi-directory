import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserLockout } from "./userlockout";
/**
 * Request model for updating login password policies
**/
export declare class UpdateLoginPasswordPolicies extends SpeakeasyBase {
    characterRules?: CharacterRules;
    enforceLoginPasswordChange?: boolean;
    minLength?: number;
    numberOfArchivedPasswords?: number;
    passwordExpiration?: PasswordExpiration;
    rejectDictionaryWords?: boolean;
    rejectKeyboardPatterns?: boolean;
    rejectUserInfo?: boolean;
    userLockout?: UserLockout;
}
