import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Delete a signin record
     *
    **/
    DeleteSigninSigninId(req: operations.DeleteSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSigninSigninIdResponse>;
    /**
     * To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens.
     *
    **/
    DeleteUserUserId(req: operations.DeleteUserUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserUserIdResponse>;
    /**
     * Retrieve the information associated with a signin record
     *
    **/
    GetSigninSigninId(req: operations.GetSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSigninSigninIdResponse>;
    /**
     * Returns a list of signin objects sorted by signin ID descending.
    **/
    GetSignins(req: operations.GetSigninsRequest, config?: AxiosRequestConfig): Promise<operations.GetSigninsResponse>;
    /**
     * Retrieve the information associated with a user's account
     *
    **/
    GetUserUserId(req: operations.GetUserUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUserIdResponse>;
    /**
     * Retrieve the information associated with all team members' user records
     *
    **/
    GetUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Pass in your old password and your new password
    **/
    PostChangePassword(req: operations.PostChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.PostChangePasswordResponse>;
    /**
     * Submit your email and password to get an API token
    **/
    PostLogin(req: operations.PostLoginRequest, config?: AxiosRequestConfig): Promise<operations.PostLoginResponse>;
    /**
     * Log out by deleting your token off the server.
    **/
    PostLogout(config?: AxiosRequestConfig): Promise<operations.PostLogoutResponse>;
    /**
     * The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.
     *
    **/
    PostRequestPasswordReset(req: operations.PostRequestPasswordResetRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestPasswordResetResponse>;
    PostSignin(req: operations.PostSigninRequest, config?: AxiosRequestConfig): Promise<operations.PostSigninResponse>;
    /**
     * Use this endpoint to create a team member (user) record
    **/
    PostUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
    /**
     * Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.
     *
    **/
    PostVerifyPasswordChange(req: operations.PostVerifyPasswordChangeRequest, config?: AxiosRequestConfig): Promise<operations.PostVerifyPasswordChangeResponse>;
    /**
     * Update a signin record
     *
    **/
    PutSigninSigninId(req: operations.PutSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSigninSigninIdResponse>;
}
export {};
