import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=AmiId" })
  amiId?: string;

  @Metadata({ data: "json, name=Architecture" })
  architecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=AutoScalingType" })
  autoScalingType?: AutoScalingTypeEnum;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=BlockDeviceMappings", elemType: shared.BlockDeviceMapping })
  blockDeviceMappings?: BlockDeviceMapping[];

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @Metadata({ data: "json, name=Ec2InstanceId" })
  ec2InstanceId?: string;

  @Metadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn?: string;

  @Metadata({ data: "json, name=EcsContainerInstanceArn" })
  ecsContainerInstanceArn?: string;

  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp?: string;

  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=InfrastructureClass" })
  infrastructureClass?: string;

  @Metadata({ data: "json, name=InstallUpdatesOnBoot" })
  installUpdatesOnBoot?: boolean;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=InstanceProfileArn" })
  instanceProfileArn?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=LastServiceErrorId" })
  lastServiceErrorId?: string;

  @Metadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @Metadata({ data: "json, name=Os" })
  os?: string;

  @Metadata({ data: "json, name=Platform" })
  platform?: string;

  @Metadata({ data: "json, name=PrivateDns" })
  privateDns?: string;

  @Metadata({ data: "json, name=PrivateIp" })
  privateIp?: string;

  @Metadata({ data: "json, name=PublicDns" })
  publicDns?: string;

  @Metadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @Metadata({ data: "json, name=RegisteredBy" })
  registeredBy?: string;

  @Metadata({ data: "json, name=ReportedAgentVersion" })
  reportedAgentVersion?: string;

  @Metadata({ data: "json, name=ReportedOs" })
  reportedOs?: ReportedOs;

  @Metadata({ data: "json, name=RootDeviceType" })
  rootDeviceType?: RootDeviceTypeEnum;

  @Metadata({ data: "json, name=RootDeviceVolumeId" })
  rootDeviceVolumeId?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SshHostDsaKeyFingerprint" })
  sshHostDsaKeyFingerprint?: string;

  @Metadata({ data: "json, name=SshHostRsaKeyFingerprint" })
  sshHostRsaKeyFingerprint?: string;

  @Metadata({ data: "json, name=SshKeyName" })
  sshKeyName?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=Tenancy" })
  tenancy?: string;

  @Metadata({ data: "json, name=VirtualizationType" })
  virtualizationType?: VirtualizationTypeEnum;
}
