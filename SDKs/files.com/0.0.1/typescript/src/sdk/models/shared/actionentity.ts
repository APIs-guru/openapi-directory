import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActionEntityActionEnum {
    Create = "create",
    Read = "read",
    Update = "update",
    Destroy = "destroy",
    Move = "move",
    Login = "login",
    Failedlogin = "failedlogin",
    Copy = "copy",
    UserCreate = "user_create",
    UserUpdate = "user_update",
    UserDestroy = "user_destroy",
    GroupCreate = "group_create",
    GroupUpdate = "group_update",
    GroupDestroy = "group_destroy",
    PermissionCreate = "permission_create",
    PermissionDestroy = "permission_destroy",
    ApiKeyCreate = "api_key_create",
    ApiKeyUpdate = "api_key_update",
    ApiKeyDestroy = "api_key_destroy"
}

export enum ActionEntityFailureTypeEnum {
    ExpiredTrial = "expired_trial",
    AccountOverdue = "account_overdue",
    LockedOut = "locked_out",
    IpMismatch = "ip_mismatch",
    PasswordMismatch = "password_mismatch",
    SiteMismatch = "site_mismatch",
    UsernameNotFound = "username_not_found",
    None = "none",
    NoFtpPermission = "no_ftp_permission",
    NoWebPermission = "no_web_permission",
    NoDirectory = "no_directory",
    ErrnoEnoent = "errno_enoent",
    NoSftpPermission = "no_sftp_permission",
    NoDavPermission = "no_dav_permission",
    NoRestapiPermission = "no_restapi_permission",
    KeyMismatch = "key_mismatch",
    RegionMismatch = "region_mismatch",
    ExpiredAccess = "expired_access",
    DesktopIpMismatch = "desktop_ip_mismatch",
    DesktopApiKeyNotUsedQuicklyEnough = "desktop_api_key_not_used_quickly_enough",
    Disabled = "disabled",
    CountryMismatch = "country_mismatch"
}

export enum ActionEntityInterfaceEnum {
    Web = "web",
    Ftp = "ftp",
    Robot = "robot",
    Jsapi = "jsapi",
    Webdesktopapi = "webdesktopapi",
    Sftp = "sftp",
    Dav = "dav",
    Desktop = "desktop",
    Restapi = "restapi",
    Scim = "scim",
    Office = "office",
    Mobile = "mobile"
}


// ActionEntity
/** 
 * List site full action history.
**/
export class ActionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ActionEntityActionEnum;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=failure_type" })
  failureType?: ActionEntityFailureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: ActionEntityInterfaceEnum;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=when" })
  when?: Date;
}
