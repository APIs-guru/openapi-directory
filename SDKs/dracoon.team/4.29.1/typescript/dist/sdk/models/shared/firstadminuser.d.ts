import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
/**
 * First administrator user
**/
export declare class FirstAdminUser extends SpeakeasyBase {
    authData?: UserAuthData;
    authMethods?: UserAuthMethod[];
    email?: string;
    firstName: string;
    gender?: string;
    language?: string;
    lastName: string;
    login?: string;
    needsToChangePassword?: boolean;
    needsToChangeUserName?: boolean;
    notifyUser?: boolean;
    password?: string;
    phone?: string;
    receiverLanguage?: string;
    title?: string;
    userName?: string;
}
