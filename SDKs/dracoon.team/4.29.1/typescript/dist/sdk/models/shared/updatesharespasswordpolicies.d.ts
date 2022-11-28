import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
/**
 * Request model for updating shares password policies
**/
export declare class UpdateSharesPasswordPolicies extends SpeakeasyBase {
    characterRules?: CharacterRules;
    minLength?: number;
    rejectDictionaryWords?: boolean;
    rejectKeyboardPatterns?: boolean;
    rejectUserInfo?: boolean;
}
