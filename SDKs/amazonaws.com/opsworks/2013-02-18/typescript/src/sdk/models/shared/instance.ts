import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { ReportedOs } from "./reportedos";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";



// Instance
/** 
 * Describes an instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=AmiId" })
  amiId?: string;

  @SpeakeasyMetadata({ data: "json, name=Architecture" })
  architecture?: ArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoScalingType" })
  autoScalingType?: AutoScalingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=BlockDeviceMappings", elemType: BlockDeviceMapping })
  blockDeviceMappings?: BlockDeviceMapping[];

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Ec2InstanceId" })
  ec2InstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EcsContainerInstanceArn" })
  ecsContainerInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp?: string;

  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=InfrastructureClass" })
  infrastructureClass?: string;

  @SpeakeasyMetadata({ data: "json, name=InstallUpdatesOnBoot" })
  installUpdatesOnBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceProfileArn" })
  instanceProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=LastServiceErrorId" })
  lastServiceErrorId?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateDns" })
  privateDns?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateIp" })
  privateIp?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicDns" })
  publicDns?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=RegisteredBy" })
  registeredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportedAgentVersion" })
  reportedAgentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportedOs" })
  reportedOs?: ReportedOs;

  @SpeakeasyMetadata({ data: "json, name=RootDeviceType" })
  rootDeviceType?: RootDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RootDeviceVolumeId" })
  rootDeviceVolumeId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SshHostDsaKeyFingerprint" })
  sshHostDsaKeyFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=SshHostRsaKeyFingerprint" })
  sshHostRsaKeyFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=SshKeyName" })
  sshKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tenancy" })
  tenancy?: string;

  @SpeakeasyMetadata({ data: "json, name=VirtualizationType" })
  virtualizationType?: VirtualizationTypeEnum;
}
