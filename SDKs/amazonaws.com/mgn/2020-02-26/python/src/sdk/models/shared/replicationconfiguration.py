from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationConfiguration:
    associate_default_security_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associateDefaultSecurityGroup') }})
    bandwidth_throttling: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthThrottling') }})
    create_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPublicIP') }})
    data_plane_routing: Optional[ReplicationConfigurationDataPlaneRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPlaneRouting') }})
    default_large_staging_disk_type: Optional[ReplicationConfigurationDefaultLargeStagingDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLargeStagingDiskType') }})
    ebs_encryption: Optional[ReplicationConfigurationEbsEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryption') }})
    ebs_encryption_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryptionKeyArn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    replicated_disks: Optional[List[ReplicationConfigurationReplicatedDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicatedDisks') }})
    replication_server_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServerInstanceType') }})
    replication_servers_security_groups_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServersSecurityGroupsIDs') }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    staging_area_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaSubnetId') }})
    staging_area_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaTags') }})
    use_dedicated_replication_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDedicatedReplicationServer') }})
    
