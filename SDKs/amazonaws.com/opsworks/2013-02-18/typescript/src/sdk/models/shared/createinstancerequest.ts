import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";


export class CreateInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=AmiId" })
  amiId?: string;

  @Metadata({ data: "json, name=Architecture" })
  architecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=AutoScalingType" })
  autoScalingType?: AutoScalingTypeEnum;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=BlockDeviceMappings", elemType: shared.BlockDeviceMapping })
  blockDeviceMappings?: BlockDeviceMapping[];

  @Metadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=InstallUpdatesOnBoot" })
  installUpdatesOnBoot?: boolean;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=LayerIds" })
  layerIds: string[];

  @Metadata({ data: "json, name=Os" })
  os?: string;

  @Metadata({ data: "json, name=RootDeviceType" })
  rootDeviceType?: RootDeviceTypeEnum;

  @Metadata({ data: "json, name=SshKeyName" })
  sshKeyName?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=Tenancy" })
  tenancy?: string;

  @Metadata({ data: "json, name=VirtualizationType" })
  virtualizationType?: string;
}
