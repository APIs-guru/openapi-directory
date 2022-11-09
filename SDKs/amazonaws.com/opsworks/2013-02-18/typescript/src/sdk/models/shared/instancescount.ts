import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstancesCount
/** 
 * Describes how many instances a stack has for each status.
**/
export class InstancesCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Assigning" })
  assigning?: number;

  @Metadata({ data: "json, name=Booting" })
  booting?: number;

  @Metadata({ data: "json, name=ConnectionLost" })
  connectionLost?: number;

  @Metadata({ data: "json, name=Deregistering" })
  deregistering?: number;

  @Metadata({ data: "json, name=Online" })
  online?: number;

  @Metadata({ data: "json, name=Pending" })
  pending?: number;

  @Metadata({ data: "json, name=Rebooting" })
  rebooting?: number;

  @Metadata({ data: "json, name=Registered" })
  registered?: number;

  @Metadata({ data: "json, name=Registering" })
  registering?: number;

  @Metadata({ data: "json, name=Requested" })
  requested?: number;

  @Metadata({ data: "json, name=RunningSetup" })
  runningSetup?: number;

  @Metadata({ data: "json, name=SetupFailed" })
  setupFailed?: number;

  @Metadata({ data: "json, name=ShuttingDown" })
  shuttingDown?: number;

  @Metadata({ data: "json, name=StartFailed" })
  startFailed?: number;

  @Metadata({ data: "json, name=StopFailed" })
  stopFailed?: number;

  @Metadata({ data: "json, name=Stopped" })
  stopped?: number;

  @Metadata({ data: "json, name=Stopping" })
  stopping?: number;

  @Metadata({ data: "json, name=Terminated" })
  terminated?: number;

  @Metadata({ data: "json, name=Terminating" })
  terminating?: number;

  @Metadata({ data: "json, name=Unassigning" })
  unassigning?: number;
}
