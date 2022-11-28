import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating user's password
**/
export declare class ChangeUserPasswordRequest extends SpeakeasyBase {
    newPassword: string;
    oldPassword: string;
}
