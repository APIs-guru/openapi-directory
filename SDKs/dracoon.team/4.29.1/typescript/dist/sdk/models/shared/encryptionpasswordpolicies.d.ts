import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { UserInfo } from "./userinfo";
/**
 * Encryption password policies
**/
export declare class EncryptionPasswordPolicies extends SpeakeasyBase {
    characterRules?: CharacterRules;
    minLength?: number;
    rejectKeyboardPatterns?: boolean;
    rejectUserInfo?: boolean;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
