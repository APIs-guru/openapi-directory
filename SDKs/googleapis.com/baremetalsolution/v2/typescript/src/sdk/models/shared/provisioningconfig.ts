import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";

export enum ProvisioningConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Submitted = "SUBMITTED"
,    Provisioning = "PROVISIONING"
,    Provisioned = "PROVISIONED"
,    Validated = "VALIDATED"
,    Cancelled = "CANCELLED"
,    Failed = "FAILED"
}


// ProvisioningConfig
/** 
 * A provisioning configuration.
**/
export class ProvisioningConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudConsoleUri" })
  cloudConsoleUri?: string;

  @Metadata({ data: "json, name=customId" })
  customId?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=handoverServiceAccount" })
  handoverServiceAccount?: string;

  @Metadata({ data: "json, name=instances", elemType: shared.InstanceConfig })
  instances?: InstanceConfig[];

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networks", elemType: shared.NetworkConfig })
  networks?: NetworkConfig[];

  @Metadata({ data: "json, name=state" })
  state?: ProvisioningConfigStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=ticketId" })
  ticketId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.VolumeConfig })
  volumes?: VolumeConfig[];

  @Metadata({ data: "json, name=vpcScEnabled" })
  vpcScEnabled?: boolean;
}
