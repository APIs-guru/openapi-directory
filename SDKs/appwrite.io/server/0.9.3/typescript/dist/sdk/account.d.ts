import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accountCreateRecovery - Create Password Recovery
     *
     * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
    **/
    accountCreateRecovery(req: operations.AccountCreateRecoveryRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateRecoveryResponse>;
    /**
     * accountCreateVerification - Create Email Verification
     *
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
    **/
    accountCreateVerification(req: operations.AccountCreateVerificationRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateVerificationResponse>;
    /**
     * accountDelete - Delete Account
     *
     * Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.
    **/
    accountDelete(req: operations.AccountDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteResponse>;
    /**
     * accountDeleteSession - Delete Account Session
     *
     * Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.
    **/
    accountDeleteSession(req: operations.AccountDeleteSessionRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteSessionResponse>;
    /**
     * accountDeleteSessions - Delete All Account Sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies from the end client.
    **/
    accountDeleteSessions(req: operations.AccountDeleteSessionsRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteSessionsResponse>;
    /**
     * accountGet - Get Account
     *
     * Get currently logged in user data as JSON object.
    **/
    accountGet(req: operations.AccountGetRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetResponse>;
    /**
     * accountGetLogs - Get Account Logs
     *
     * Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.
    **/
    accountGetLogs(req: operations.AccountGetLogsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetLogsResponse>;
    /**
     * accountGetPrefs - Get Account Preferences
     *
     * Get currently logged in user preferences as a key-value object.
    **/
    accountGetPrefs(req: operations.AccountGetPrefsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetPrefsResponse>;
    /**
     * accountGetSession - Get Session By ID
     *
     * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
    **/
    accountGetSession(req: operations.AccountGetSessionRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetSessionResponse>;
    /**
     * accountGetSessions - Get Account Sessions
     *
     * Get currently logged in user list of active sessions across different devices.
    **/
    accountGetSessions(req: operations.AccountGetSessionsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetSessionsResponse>;
    /**
     * accountUpdateEmail - Update Account Email
     *
     * Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
    **/
    accountUpdateEmail(req: operations.AccountUpdateEmailRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateEmailResponse>;
    /**
     * accountUpdateName - Update Account Name
     *
     * Update currently logged in user account name.
    **/
    accountUpdateName(req: operations.AccountUpdateNameRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateNameResponse>;
    /**
     * accountUpdatePassword - Update Account Password
     *
     * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.
    **/
    accountUpdatePassword(req: operations.AccountUpdatePasswordRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdatePasswordResponse>;
    /**
     * accountUpdatePrefs - Update Account Preferences
     *
     * Update currently logged in user account preferences. You can pass only the specific settings you wish to update.
    **/
    accountUpdatePrefs(req: operations.AccountUpdatePrefsRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdatePrefsResponse>;
    /**
     * accountUpdateRecovery - Complete Password Recovery
     *
     * Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
    **/
    accountUpdateRecovery(req: operations.AccountUpdateRecoveryRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateRecoveryResponse>;
    /**
     * accountUpdateVerification - Complete Email Verification
     *
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
    **/
    accountUpdateVerification(req: operations.AccountUpdateVerificationRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateVerificationResponse>;
}
