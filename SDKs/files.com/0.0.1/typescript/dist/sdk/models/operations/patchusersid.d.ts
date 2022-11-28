import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchUsersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PatchUsersIdRequestBodyAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup"
}
export declare class PatchUsersIdRequestBodyAvatarFile extends SpeakeasyBase {
    avatarFile: string;
    content: Uint8Array;
}
export declare enum PatchUsersIdRequestBodyRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare enum PatchUsersIdRequestBodySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare class PatchUsersIdRequestBody extends SpeakeasyBase {
    allowedIps?: string;
    announcementsRead?: boolean;
    attachmentsPermission?: boolean;
    authenticateUntil?: Date;
    authenticationMethod?: PatchUsersIdRequestBodyAuthenticationMethodEnum;
    avatarDelete?: boolean;
    avatarFile?: PatchUsersIdRequestBodyAvatarFile;
    billingPermission?: boolean;
    bypassInactiveDisable?: boolean;
    bypassSiteAllowedIps?: boolean;
    changePassword?: string;
    changePasswordConfirmation?: string;
    company?: string;
    davPermission?: boolean;
    disabled?: boolean;
    email?: string;
    ftpPermission?: boolean;
    grantPermission?: string;
    groupId?: number;
    groupIds?: string;
    headerText?: string;
    language?: string;
    name?: string;
    notes?: string;
    notificationDailySendTime?: number;
    officeIntegrationEnabled?: boolean;
    password?: string;
    passwordConfirmation?: string;
    passwordValidityDays?: number;
    receiveAdminAlerts?: boolean;
    require2fa?: PatchUsersIdRequestBodyRequire2faEnum;
    requirePasswordChange?: boolean;
    restapiPermission?: boolean;
    selfManaged?: boolean;
    sftpPermission?: boolean;
    siteAdmin?: boolean;
    skipWelcomeScreen?: boolean;
    sslRequired?: PatchUsersIdRequestBodySslRequiredEnum;
    ssoStrategyId?: number;
    subscribeToNewsletter?: boolean;
    timeZone?: string;
    userRoot?: string;
    username?: string;
}
export declare class PatchUsersIdRequest extends SpeakeasyBase {
    pathParams: PatchUsersIdPathParams;
    request?: PatchUsersIdRequestBody;
}
export declare class PatchUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userEntity?: shared.UserEntity;
}
