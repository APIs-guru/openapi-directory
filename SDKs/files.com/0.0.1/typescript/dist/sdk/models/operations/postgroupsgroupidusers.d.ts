import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGroupsGroupIdUsersPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare enum PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup"
}
export declare class PostGroupsGroupIdUsersRequestBodyAvatarFile extends SpeakeasyBase {
    avatarFile: string;
    content: Uint8Array;
}
export declare enum PostGroupsGroupIdUsersRequestBodyRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare enum PostGroupsGroupIdUsersRequestBodySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare class PostGroupsGroupIdUsersRequestBody extends SpeakeasyBase {
    allowedIps?: string;
    announcementsRead?: boolean;
    attachmentsPermission?: boolean;
    authenticateUntil?: Date;
    authenticationMethod?: PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum;
    avatarDelete?: boolean;
    avatarFile?: PostGroupsGroupIdUsersRequestBodyAvatarFile;
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
    require2fa?: PostGroupsGroupIdUsersRequestBodyRequire2faEnum;
    requirePasswordChange?: boolean;
    restapiPermission?: boolean;
    selfManaged?: boolean;
    sftpPermission?: boolean;
    siteAdmin?: boolean;
    skipWelcomeScreen?: boolean;
    sslRequired?: PostGroupsGroupIdUsersRequestBodySslRequiredEnum;
    ssoStrategyId?: number;
    subscribeToNewsletter?: boolean;
    timeZone?: string;
    userRoot?: string;
    username?: string;
}
export declare class PostGroupsGroupIdUsersRequest extends SpeakeasyBase {
    pathParams: PostGroupsGroupIdUsersPathParams;
    request?: PostGroupsGroupIdUsersRequestBody;
}
export declare class PostGroupsGroupIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userEntity?: shared.UserEntity;
}
