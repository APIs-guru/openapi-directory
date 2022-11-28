import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PatchUserRequestBodyAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup"
}
export declare class PatchUserRequestBodyAvatarFile extends SpeakeasyBase {
    avatarFile: string;
    content: Uint8Array;
}
export declare enum PatchUserRequestBodyRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare enum PatchUserRequestBodySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare class PatchUserRequestBody extends SpeakeasyBase {
    allowedIps?: string;
    announcementsRead?: boolean;
    attachmentsPermission?: boolean;
    authenticateUntil?: Date;
    authenticationMethod?: PatchUserRequestBodyAuthenticationMethodEnum;
    avatarDelete?: boolean;
    avatarFile?: PatchUserRequestBodyAvatarFile;
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
    require2fa?: PatchUserRequestBodyRequire2faEnum;
    requirePasswordChange?: boolean;
    restapiPermission?: boolean;
    selfManaged?: boolean;
    sftpPermission?: boolean;
    siteAdmin?: boolean;
    skipWelcomeScreen?: boolean;
    sslRequired?: PatchUserRequestBodySslRequiredEnum;
    ssoStrategyId?: number;
    subscribeToNewsletter?: boolean;
    timeZone?: string;
    userRoot?: string;
    username?: string;
}
export declare class PatchUserRequest extends SpeakeasyBase {
    request?: PatchUserRequestBody;
}
export declare class PatchUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userEntity?: shared.UserEntity;
}
