import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostUsersRequestBodyAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup"
}
export declare class PostUsersRequestBodyAvatarFile extends SpeakeasyBase {
    avatarFile: string;
    content: Uint8Array;
}
export declare enum PostUsersRequestBodyRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare enum PostUsersRequestBodySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare class PostUsersRequestBody extends SpeakeasyBase {
    allowedIps?: string;
    announcementsRead?: boolean;
    attachmentsPermission?: boolean;
    authenticateUntil?: Date;
    authenticationMethod?: PostUsersRequestBodyAuthenticationMethodEnum;
    avatarDelete?: boolean;
    avatarFile?: PostUsersRequestBodyAvatarFile;
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
    require2fa?: PostUsersRequestBodyRequire2faEnum;
    requirePasswordChange?: boolean;
    restapiPermission?: boolean;
    selfManaged?: boolean;
    sftpPermission?: boolean;
    siteAdmin?: boolean;
    skipWelcomeScreen?: boolean;
    sslRequired?: PostUsersRequestBodySslRequiredEnum;
    ssoStrategyId?: number;
    subscribeToNewsletter?: boolean;
    timeZone?: string;
    userRoot?: string;
    username?: string;
}
export declare class PostUsersRequest extends SpeakeasyBase {
    request?: PostUsersRequestBody;
}
export declare class PostUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userEntity?: shared.UserEntity;
}
