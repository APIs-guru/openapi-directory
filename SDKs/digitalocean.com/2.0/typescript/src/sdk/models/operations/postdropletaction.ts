import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDropletActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}

export enum PostDropletActionRequestBody1TypeEnum {
    EnableBackups = "enable_backups"
,    DisableBackups = "disable_backups"
,    Reboot = "reboot"
,    PowerCycle = "power_cycle"
,    Shutdown = "shutdown"
,    PowerOff = "power_off"
,    PowerOn = "power_on"
,    Restore = "restore"
,    PasswordReset = "password_reset"
,    Resize = "resize"
,    Rebuild = "rebuild"
,    Rename = "rename"
,    ChangeKernel = "change_kernel"
,    EnableIpv6 = "enable_ipv6"
,    Snapshot = "snapshot"
}


// PostDropletActionRequestBody1
/** 
 * Specifies the action that will be taken on the Droplet.
**/
export class PostDropletActionRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody1TypeEnum;
}

export enum PostDropletActionRequestBody2TypeEnum {
    EnableBackups = "enable_backups"
,    DisableBackups = "disable_backups"
,    Reboot = "reboot"
,    PowerCycle = "power_cycle"
,    Shutdown = "shutdown"
,    PowerOff = "power_off"
,    PowerOn = "power_on"
,    Restore = "restore"
,    PasswordReset = "password_reset"
,    Resize = "resize"
,    Rebuild = "rebuild"
,    Rename = "rename"
,    ChangeKernel = "change_kernel"
,    EnableIpv6 = "enable_ipv6"
,    Snapshot = "snapshot"
}


export class PostDropletActionRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: number;

  @Metadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody2TypeEnum;
}

export enum PostDropletActionRequestBody3TypeEnum {
    EnableBackups = "enable_backups"
,    DisableBackups = "disable_backups"
,    Reboot = "reboot"
,    PowerCycle = "power_cycle"
,    Shutdown = "shutdown"
,    PowerOff = "power_off"
,    PowerOn = "power_on"
,    Restore = "restore"
,    PasswordReset = "password_reset"
,    Resize = "resize"
,    Rebuild = "rebuild"
,    Rename = "rename"
,    ChangeKernel = "change_kernel"
,    EnableIpv6 = "enable_ipv6"
,    Snapshot = "snapshot"
}


export class PostDropletActionRequestBody3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=disk" })
  disk?: boolean;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody3TypeEnum;
}

export enum PostDropletActionRequestBody4TypeEnum {
    EnableBackups = "enable_backups"
,    DisableBackups = "disable_backups"
,    Reboot = "reboot"
,    PowerCycle = "power_cycle"
,    Shutdown = "shutdown"
,    PowerOff = "power_off"
,    PowerOn = "power_on"
,    Restore = "restore"
,    PasswordReset = "password_reset"
,    Resize = "resize"
,    Rebuild = "rebuild"
,    Rename = "rename"
,    ChangeKernel = "change_kernel"
,    EnableIpv6 = "enable_ipv6"
,    Snapshot = "snapshot"
}


export class PostDropletActionRequestBody4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: any;

  @Metadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody4TypeEnum;
}

export enum PostDropletActionRequestBody5TypeEnum {
    EnableBackups = "enable_backups"
,    DisableBackups = "disable_backups"
,    Reboot = "reboot"
,    PowerCycle = "power_cycle"
,    Shutdown = "shutdown"
,    PowerOff = "power_off"
,    PowerOn = "power_on"
,    Restore = "restore"
,    PasswordReset = "password_reset"
,    Resize = "resize"
,    Rebuild = "rebuild"
,    Rename = "rename"
,    ChangeKernel = "change_kernel"
,    EnableIpv6 = "enable_ipv6"
,    Snapshot = "snapshot"
}


export class PostDropletActionRequestBody5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody5TypeEnum;
}

export enum PostDropletActionRequestBody6TypeEnum {
    EnableBackups = "enable_backups"
,    DisableBackups = "disable_backups"
,    Reboot = "reboot"
,    PowerCycle = "power_cycle"
,    Shutdown = "shutdown"
,    PowerOff = "power_off"
,    PowerOn = "power_on"
,    Restore = "restore"
,    PasswordReset = "password_reset"
,    Resize = "resize"
,    Rebuild = "rebuild"
,    Rename = "rename"
,    ChangeKernel = "change_kernel"
,    EnableIpv6 = "enable_ipv6"
,    Snapshot = "snapshot"
}


export class PostDropletActionRequestBody6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=kernel" })
  kernel?: number;

  @Metadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody6TypeEnum;
}

export enum PostDropletActionRequestBody7TypeEnum {
    EnableBackups = "enable_backups"
,    DisableBackups = "disable_backups"
,    Reboot = "reboot"
,    PowerCycle = "power_cycle"
,    Shutdown = "shutdown"
,    PowerOff = "power_off"
,    PowerOn = "power_on"
,    Restore = "restore"
,    PasswordReset = "password_reset"
,    Resize = "resize"
,    Rebuild = "rebuild"
,    Rename = "rename"
,    ChangeKernel = "change_kernel"
,    EnableIpv6 = "enable_ipv6"
,    Snapshot = "snapshot"
}


export class PostDropletActionRequestBody7 extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type: PostDropletActionRequestBody7TypeEnum;
}


export class PostDropletActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostDropletActionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostDropletAction401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostDropletActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  postDropletAction201ApplicationJsonAny?: any;

  @Metadata()
  postDropletAction401ApplicationJsonObject?: PostDropletAction401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
