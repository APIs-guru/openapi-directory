import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
import { LunInput } from "./lun";
import { VolumeInput } from "./volume";
import { Lun } from "./lun";
import { Network } from "./network";
import { Volume } from "./volume";


export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    Deleted = "DELETED",
    Updating = "UPDATING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Shutdown = "SHUTDOWN"
}


// InstanceInput
/** 
 * A server.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hyperthreadingEnabled" })
  hyperthreadingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];

  @SpeakeasyMetadata({ data: "json, name=luns", elemType: LunInput })
  luns?: LunInput[];

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkTemplate" })
  networkTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=osImage" })
  osImage?: string;

  @SpeakeasyMetadata({ data: "json, name=pod" })
  pod?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: VolumeInput })
  volumes?: VolumeInput[];
}


// Instance
/** 
 * A server.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hyperthreadingEnabled" })
  hyperthreadingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=interactiveSerialConsoleEnabled" })
  interactiveSerialConsoleEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];

  @SpeakeasyMetadata({ data: "json, name=loginInfo" })
  loginInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=luns", elemType: Lun })
  luns?: Lun[];

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkTemplate" })
  networkTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: Network })
  networks?: Network[];

  @SpeakeasyMetadata({ data: "json, name=osImage" })
  osImage?: string;

  @SpeakeasyMetadata({ data: "json, name=pod" })
  pod?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
