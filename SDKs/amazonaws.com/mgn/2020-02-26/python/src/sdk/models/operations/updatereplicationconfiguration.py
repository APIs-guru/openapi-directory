from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateReplicationConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum(str, Enum):
    PRIVATE_IP = "PRIVATE_IP"
    PUBLIC_IP = "PUBLIC_IP"

class UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum(str, Enum):
    GP2 = "GP2"
    ST1 = "ST1"

class UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class UpdateReplicationConfigurationRequestBody:
    source_server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    associate_default_security_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associateDefaultSecurityGroup') }})
    bandwidth_throttling: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthThrottling') }})
    create_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPublicIP') }})
    data_plane_routing: Optional[UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPlaneRouting') }})
    default_large_staging_disk_type: Optional[UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLargeStagingDiskType') }})
    ebs_encryption: Optional[UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryption') }})
    ebs_encryption_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryptionKeyArn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    replicated_disks: Optional[List[shared.ReplicationConfigurationReplicatedDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicatedDisks') }})
    replication_server_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServerInstanceType') }})
    replication_servers_security_groups_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServersSecurityGroupsIDs') }})
    staging_area_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaSubnetId') }})
    staging_area_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaTags') }})
    use_dedicated_replication_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDedicatedReplicationServer') }})
    

@dataclass
class UpdateReplicationConfigurationRequest:
    headers: UpdateReplicationConfigurationHeaders = field()
    request: UpdateReplicationConfigurationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateReplicationConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    replication_configuration: Optional[shared.ReplicationConfiguration] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
