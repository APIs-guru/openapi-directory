import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
import { Lun } from "./lun";
import { Network } from "./network";
import { Volume } from "./volume";

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Provisioning = "PROVISIONING"
,    Running = "RUNNING"
,    Deleted = "DELETED"
,    Updating = "UPDATING"
,    Starting = "STARTING"
,    Stopping = "STOPPING"
,    Shutdown = "SHUTDOWN"
}


// Instance
/** 
 * A server.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=hyperthreadingEnabled" })
  hyperthreadingEnabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=interactiveSerialConsoleEnabled" })
  interactiveSerialConsoleEnabled?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=logicalInterfaces", elemType: shared.GoogleCloudBaremetalsolutionV2LogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];

  @Metadata({ data: "json, name=loginInfo" })
  loginInfo?: string;

  @Metadata({ data: "json, name=luns", elemType: shared.Lun })
  luns?: Lun[];

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkTemplate" })
  networkTemplate?: string;

  @Metadata({ data: "json, name=networks", elemType: shared.Network })
  networks?: Network[];

  @Metadata({ data: "json, name=osImage" })
  osImage?: string;

  @Metadata({ data: "json, name=pod" })
  pod?: string;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
