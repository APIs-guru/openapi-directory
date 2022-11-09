import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";


export class UpdateInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=AmiId" })
  amiId?: string;

  @Metadata({ data: "json, name=Architecture" })
  architecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=AutoScalingType" })
  autoScalingType?: AutoScalingTypeEnum;

  @Metadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=InstallUpdatesOnBoot" })
  installUpdatesOnBoot?: boolean;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @Metadata({ data: "json, name=Os" })
  os?: string;

  @Metadata({ data: "json, name=SshKeyName" })
  sshKeyName?: string;
}
