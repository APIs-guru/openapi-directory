import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthDataUpdateRequest } from "./userauthdataupdaterequest";
import { UserAuthMethod } from "./userauthmethod";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating user's metadata
**/
export declare class UpdateUserRequest extends SpeakeasyBase {
    authData?: UserAuthDataUpdateRequest;
    authMethods?: UserAuthMethod[];
    email?: string;
    expiration?: ObjectExpiration;
    firstName?: string;
    gender?: string;
    isLocked?: boolean;
    lastName?: string;
    lockStatus?: number;
    phone?: string;
    receiverLanguage?: string;
    title?: string;
    userName?: string;
}
