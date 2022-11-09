import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActionEntityActionEnum {
    Create = "create"
,    Read = "read"
,    Update = "update"
,    Destroy = "destroy"
,    Move = "move"
,    Login = "login"
,    Failedlogin = "failedlogin"
,    Copy = "copy"
,    UserCreate = "user_create"
,    UserUpdate = "user_update"
,    UserDestroy = "user_destroy"
,    GroupCreate = "group_create"
,    GroupUpdate = "group_update"
,    GroupDestroy = "group_destroy"
,    PermissionCreate = "permission_create"
,    PermissionDestroy = "permission_destroy"
,    ApiKeyCreate = "api_key_create"
,    ApiKeyUpdate = "api_key_update"
,    ApiKeyDestroy = "api_key_destroy"
}

export enum ActionEntityFailureTypeEnum {
    ExpiredTrial = "expired_trial"
,    AccountOverdue = "account_overdue"
,    LockedOut = "locked_out"
,    IpMismatch = "ip_mismatch"
,    PasswordMismatch = "password_mismatch"
,    SiteMismatch = "site_mismatch"
,    UsernameNotFound = "username_not_found"
,    None = "none"
,    NoFtpPermission = "no_ftp_permission"
,    NoWebPermission = "no_web_permission"
,    NoDirectory = "no_directory"
,    ErrnoEnoent = "errno_enoent"
,    NoSftpPermission = "no_sftp_permission"
,    NoDavPermission = "no_dav_permission"
,    NoRestapiPermission = "no_restapi_permission"
,    KeyMismatch = "key_mismatch"
,    RegionMismatch = "region_mismatch"
,    ExpiredAccess = "expired_access"
,    DesktopIpMismatch = "desktop_ip_mismatch"
,    DesktopApiKeyNotUsedQuicklyEnough = "desktop_api_key_not_used_quickly_enough"
,    Disabled = "disabled"
,    CountryMismatch = "country_mismatch"
}

export enum ActionEntityInterfaceEnum {
    Web = "web"
,    Ftp = "ftp"
,    Robot = "robot"
,    Jsapi = "jsapi"
,    Webdesktopapi = "webdesktopapi"
,    Sftp = "sftp"
,    Dav = "dav"
,    Desktop = "desktop"
,    Restapi = "restapi"
,    Scim = "scim"
,    Office = "office"
,    Mobile = "mobile"
}


// ActionEntity
/** 
 * List site full action history.
**/
export class ActionEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: ActionEntityActionEnum;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=failure_type" })
  failureType?: ActionEntityFailureTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: ActionEntityInterfaceEnum;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=targets" })
  targets?: string[];

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=when" })
  when?: Date;
}
