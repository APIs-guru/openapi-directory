import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
/**
 * Request model for updating encryption password policies
**/
export declare class UpdateEncryptionPasswordPolicies extends SpeakeasyBase {
    characterRules?: CharacterRules;
    minLength?: number;
    rejectKeyboardPatterns?: boolean;
    rejectUserInfo?: boolean;
}
