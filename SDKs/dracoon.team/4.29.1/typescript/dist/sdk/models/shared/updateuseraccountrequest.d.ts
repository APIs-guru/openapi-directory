import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating user account information
**/
export declare class UpdateUserAccountRequest extends SpeakeasyBase {
    acceptEula?: boolean;
    email?: string;
    firstName?: string;
    gender?: string;
    language?: string;
    lastName?: string;
    login?: string;
    phone?: string;
    title?: string;
    userName?: string;
}
