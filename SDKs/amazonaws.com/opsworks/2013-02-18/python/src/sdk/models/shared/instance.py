from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Instance:
    r"""Instance
    Describes an instance.
    """
    
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersion') }})
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiId') }})
    architecture: Optional[ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Architecture') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    auto_scaling_type: Optional[AutoScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingType') }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    block_device_mappings: Optional[List[BlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockDeviceMappings') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsOptimized') }})
    ec2_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2InstanceId') }})
    ecs_cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsClusterArn') }})
    ecs_container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsContainerInstanceArn') }})
    elastic_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticIp') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    infrastructure_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InfrastructureClass') }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallUpdatesOnBoot') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceProfileArn') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    last_service_error_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastServiceErrorId') }})
    layer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerIds') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Os') }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Platform') }})
    private_dns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateDns') }})
    private_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateIp') }})
    public_dns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicDns') }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicIp') }})
    registered_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisteredBy') }})
    reported_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportedAgentVersion') }})
    reported_os: Optional[ReportedOs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportedOs') }})
    root_device_type: Optional[RootDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDeviceType') }})
    root_device_volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDeviceVolumeId') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    ssh_host_dsa_key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshHostDsaKeyFingerprint') }})
    ssh_host_rsa_key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshHostRsaKeyFingerprint') }})
    ssh_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshKeyName') }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    tenancy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancy') }})
    virtualization_type: Optional[VirtualizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VirtualizationType') }})
    
