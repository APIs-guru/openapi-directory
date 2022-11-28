from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationConfigurationTemplate:
    replication_configuration_template_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationConfigurationTemplateID') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    associate_default_security_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associateDefaultSecurityGroup') }})
    bandwidth_throttling: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthThrottling') }})
    create_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPublicIP') }})
    data_plane_routing: Optional[ReplicationConfigurationDataPlaneRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPlaneRouting') }})
    default_large_staging_disk_type: Optional[ReplicationConfigurationDefaultLargeStagingDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLargeStagingDiskType') }})
    ebs_encryption: Optional[ReplicationConfigurationEbsEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryption') }})
    ebs_encryption_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryptionKeyArn') }})
    replication_server_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServerInstanceType') }})
    replication_servers_security_groups_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServersSecurityGroupsIDs') }})
    staging_area_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaSubnetId') }})
    staging_area_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaTags') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    use_dedicated_replication_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDedicatedReplicationServer') }})
    
