from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import replicationconfigurationdataplanerouting_enum
from . import replicationconfigurationdefaultlargestagingdisktype_enum
from . import replicationconfigurationebsencryption_enum


@dataclass_json
@dataclass
class ReplicationConfigurationTemplate:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    associate_default_security_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associateDefaultSecurityGroup' }})
    bandwidth_throttling: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthThrottling' }})
    create_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createPublicIP' }})
    data_plane_routing: Optional[replicationconfigurationdataplanerouting_enum.ReplicationConfigurationDataPlaneRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPlaneRouting' }})
    default_large_staging_disk_type: Optional[replicationconfigurationdefaultlargestagingdisktype_enum.ReplicationConfigurationDefaultLargeStagingDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLargeStagingDiskType' }})
    ebs_encryption: Optional[replicationconfigurationebsencryption_enum.ReplicationConfigurationEbsEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebsEncryption' }})
    ebs_encryption_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebsEncryptionKeyArn' }})
    replication_configuration_template_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationConfigurationTemplateID' }})
    replication_server_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationServerInstanceType' }})
    replication_servers_security_groups_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationServersSecurityGroupsIDs' }})
    staging_area_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingAreaSubnetId' }})
    staging_area_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingAreaTags' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    use_dedicated_replication_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDedicatedReplicationServer' }})
    
