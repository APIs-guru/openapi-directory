import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for creating an user
**/
export declare class CreateUserRequest extends SpeakeasyBase {
    authData?: UserAuthData;
    authMethods?: UserAuthMethod[];
    email?: string;
    expiration?: ObjectExpiration;
    firstName: string;
    gender?: string;
    isNonmemberViewer?: boolean;
    lastName: string;
    login?: string;
    needsToChangePassword?: boolean;
    notifyUser?: boolean;
    password?: string;
    phone?: string;
    receiverLanguage?: string;
    title?: string;
    userName?: string;
}
