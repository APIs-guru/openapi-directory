import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Command
/** 
 * Describes a command.
**/
export class Command extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcknowledgedAt" })
  acknowledgedAt?: string;

  @Metadata({ data: "json, name=CommandId" })
  commandId?: string;

  @Metadata({ data: "json, name=CompletedAt" })
  completedAt?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=ExitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=LogUrl" })
  logUrl?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
