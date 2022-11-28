import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * completeOpenIdLogin - Complete OpenID Connect authentication
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>
     *
     * ### Description:
     * This is the second step of the OpenID Connect authentication.
     * The user hands over the authorization code and is logged in.
     *
     * ### Precondition:
     * Existing user with activated OpenID Connect authentication that is **NOT** locked.
     *
     * ### Postcondition:
     * User is logged in.
     *
     * ### Further Information:
     * None.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    completeOpenIdLogin(req: operations.CompleteOpenIdLoginRequest, config?: AxiosRequestConfig): Promise<operations.CompleteOpenIdLoginResponse>;
    /**
     * initiateOpenIdLogin - Initiate OpenID Connect authentication
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>
     *
     * ### Description:
     * This is the first step of the OpenID Connect authentication.
     * The user is send to the OpenID Connect identity provider to authenticate himself and retrieve an authorization code.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * User is redirected to OpenID Connect identity provider to authenticate himself.
     *
     * ### Further Information:
     * None.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    initiateOpenIdLogin(req: operations.InitiateOpenIdLoginRequest, config?: AxiosRequestConfig): Promise<operations.InitiateOpenIdLoginResponse>;
    /**
     * login - Authenticate user (Login)
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.13.0</h3>
     *
     * ### Description:
     * Authenticates user and provides an authentication token (`X-Sds-Auth-Token`) that is required for the most operations.
     *
     * ### Precondition:
     * Existing user that is **NOT** locked.
     *
     * ### Postcondition:
     * User is logged in.
     *
     * ### Further Information:
     * The provided token is valid for **two hours**, every usage resets this period to two full hours again.
     * Logging off invalidates the token.
     *
     * ### Available authentication methods:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Authentication Method (`authType`) | Description |
     * | :--- | :--- |
     * | `basic` | Log in with credentials stored in the database <br>Formerly known as `sql`.|
     * | `active_directory` | Log in with Active Directory credentials |
     * | `radius` | Log in with RADIUS username, PIN and token password.<br>Token (request parameter) may be set, otherwise this parameter is ignored. If token is set, password is optional. |
     * | `openid` | Please use `POST /auth/openid/login` API to login with OpenID Connect identity |
     *
     * </details>
     *
     * https://tools.ietf.org/html/rfc2865 - Remote Authentication Dial In User Service (RADIUS)
    **/
    login(req: operations.LoginRequest, config?: AxiosRequestConfig): Promise<operations.LoginResponse>;
    /**
     * ping - Ping
     *
     * ### Description:
     * Test connection to DRACOON Core Service.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * `200 OK` with current date string is returned if successful.
     *
     * ### Further Information:
     * None.
    **/
    ping(config?: AxiosRequestConfig): Promise<operations.PingResponse>;
    /**
     * recoverUserName - Recover username
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.13.0</h3>
     *
     * ### Description:
     * Request an email with the user names of all accounts connected to the email.
     *
     * ### Precondition:
     * Valid email address.
     *
     * ### Postcondition:
     * An email is sent to the provided address, with a list of account user names connected to it.
     *
     * ### Further Information:
     * None.
     *
    **/
    recoverUserName(req: operations.RecoverUserNameRequest, config?: AxiosRequestConfig): Promise<operations.RecoverUserNameResponse>;
    /**
     * requestOpenIdAuthResources - Request OpenID Connect authentication resources
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
     *
     * ### Description:
     * Provides information about OpenID Connect authentication options.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * List of available OpenID Connect Providers is returned.
     *
     * ### Further Information:
     * Empty list is returned if OpenID Connect is **NOT** configured.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    requestOpenIdAuthResources(config?: AxiosRequestConfig): Promise<operations.RequestOpenIdAuthResourcesResponse>;
    /**
     * requestPasswordReset - Request password reset
     *
     * ### Description:
     * Request an email with a password reset token for a certain user to reset password.
     *
     * ### Precondition:
     * Registered user account.
     *
     * ### Postcondition:
     * Provided user receives email with password reset token.
     *
     * ### Further Information:
     * None.
    **/
    requestPasswordReset(req: operations.RequestPasswordResetRequest, config?: AxiosRequestConfig): Promise<operations.RequestPasswordResetResponse>;
    /**
     * resetPassword - Reset password
     *
     * ### Description:
     * Resets user's password.
     *
     * ### Precondition:
     * User received a password reset token.
     *
     * ### Postcondition:
     * User's password is reset to the provided password.
     *
     * ### Further Information:
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * validateResetPasswordToken - Validate information for password reset
     *
     * ### Description:
     * Request all information for a password change dialogue e.g. real name of user.
     *
     * ### Precondition:
     * User received a password reset token.
     *
     * ### Postcondition:
     * Context information is returned.
     *
     * ### Further Information:
     * None.
    **/
    validateResetPasswordToken(req: operations.ValidateResetPasswordTokenRequest, config?: AxiosRequestConfig): Promise<operations.ValidateResetPasswordTokenResponse>;
}
