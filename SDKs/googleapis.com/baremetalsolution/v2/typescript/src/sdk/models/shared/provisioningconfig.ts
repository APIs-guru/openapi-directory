import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";
import { InstanceConfigInput } from "./instanceconfig";
import { NetworkConfigInput } from "./networkconfig";
import { VolumeConfigInput } from "./volumeconfig";


export enum ProvisioningConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Submitted = "SUBMITTED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Validated = "VALIDATED",
    Cancelled = "CANCELLED",
    Failed = "FAILED"
}


// ProvisioningConfig
/** 
 * A provisioning configuration.
**/
export class ProvisioningConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudConsoleUri" })
  cloudConsoleUri?: string;

  @SpeakeasyMetadata({ data: "json, name=customId" })
  customId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=handoverServiceAccount" })
  handoverServiceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceConfig })
  instances?: InstanceConfig[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkConfig })
  networks?: NetworkConfig[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ProvisioningConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ticketId" })
  ticketId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: VolumeConfig })
  volumes?: VolumeConfig[];

  @SpeakeasyMetadata({ data: "json, name=vpcScEnabled" })
  vpcScEnabled?: boolean;
}


// ProvisioningConfigInput
/** 
 * A provisioning configuration.
**/
export class ProvisioningConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customId" })
  customId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=handoverServiceAccount" })
  handoverServiceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceConfigInput })
  instances?: InstanceConfigInput[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkConfigInput })
  networks?: NetworkConfigInput[];

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ticketId" })
  ticketId?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: VolumeConfigInput })
  volumes?: VolumeConfigInput[];

  @SpeakeasyMetadata({ data: "json, name=vpcScEnabled" })
  vpcScEnabled?: boolean;
}
