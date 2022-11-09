import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6TypeEnum {
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


export class Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type: Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6TypeEnum;
}
