import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Command
/** 
 * Describes a command.
**/
export class Command extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcknowledgedAt" })
  acknowledgedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=CommandId" })
  commandId?: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedAt" })
  completedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogUrl" })
  logUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
