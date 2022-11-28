import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { UserInfo } from "./userinfo";
/**
 * Shares password policies
**/
export declare class SharesPasswordPolicies extends SpeakeasyBase {
    characterRules?: CharacterRules;
    minLength?: number;
    rejectDictionaryWords?: boolean;
    rejectKeyboardPatterns?: boolean;
    rejectUserInfo?: boolean;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
