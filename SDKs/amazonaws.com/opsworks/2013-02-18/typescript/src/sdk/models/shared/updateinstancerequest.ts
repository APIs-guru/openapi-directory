import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";



export class UpdateInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=AmiId" })
  amiId?: string;

  @SpeakeasyMetadata({ data: "json, name=Architecture" })
  architecture?: ArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=AutoScalingType" })
  autoScalingType?: AutoScalingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=InstallUpdatesOnBoot" })
  installUpdatesOnBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=SshKeyName" })
  sshKeyName?: string;
}
