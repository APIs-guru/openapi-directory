import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for reseting user's login password
**/
export declare class ResetPasswordRequest extends SpeakeasyBase {
    creatorLanguage?: string;
    language?: string;
    login?: string;
    userName?: string;
}
