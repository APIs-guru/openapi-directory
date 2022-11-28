import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstancesCount
/** 
 * Describes how many instances a stack has for each status.
**/
export class InstancesCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Assigning" })
  assigning?: number;

  @SpeakeasyMetadata({ data: "json, name=Booting" })
  booting?: number;

  @SpeakeasyMetadata({ data: "json, name=ConnectionLost" })
  connectionLost?: number;

  @SpeakeasyMetadata({ data: "json, name=Deregistering" })
  deregistering?: number;

  @SpeakeasyMetadata({ data: "json, name=Online" })
  online?: number;

  @SpeakeasyMetadata({ data: "json, name=Pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=Rebooting" })
  rebooting?: number;

  @SpeakeasyMetadata({ data: "json, name=Registered" })
  registered?: number;

  @SpeakeasyMetadata({ data: "json, name=Registering" })
  registering?: number;

  @SpeakeasyMetadata({ data: "json, name=Requested" })
  requested?: number;

  @SpeakeasyMetadata({ data: "json, name=RunningSetup" })
  runningSetup?: number;

  @SpeakeasyMetadata({ data: "json, name=SetupFailed" })
  setupFailed?: number;

  @SpeakeasyMetadata({ data: "json, name=ShuttingDown" })
  shuttingDown?: number;

  @SpeakeasyMetadata({ data: "json, name=StartFailed" })
  startFailed?: number;

  @SpeakeasyMetadata({ data: "json, name=StopFailed" })
  stopFailed?: number;

  @SpeakeasyMetadata({ data: "json, name=Stopped" })
  stopped?: number;

  @SpeakeasyMetadata({ data: "json, name=Stopping" })
  stopping?: number;

  @SpeakeasyMetadata({ data: "json, name=Terminated" })
  terminated?: number;

  @SpeakeasyMetadata({ data: "json, name=Terminating" })
  terminating?: number;

  @SpeakeasyMetadata({ data: "json, name=Unassigning" })
  unassigning?: number;
}
