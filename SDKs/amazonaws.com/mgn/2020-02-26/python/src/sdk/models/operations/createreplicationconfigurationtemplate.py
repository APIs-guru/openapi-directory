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
class CreateReplicationConfigurationTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum(str, Enum):
    PRIVATE_IP = "PRIVATE_IP"
    PUBLIC_IP = "PUBLIC_IP"

class CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum(str, Enum):
    GP2 = "GP2"
    ST1 = "ST1"

class CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class CreateReplicationConfigurationTemplateRequestBody:
    associate_default_security_group: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('associateDefaultSecurityGroup') }})
    bandwidth_throttling: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthThrottling') }})
    create_public_ip: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPublicIP') }})
    data_plane_routing: CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPlaneRouting') }})
    default_large_staging_disk_type: CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLargeStagingDiskType') }})
    ebs_encryption: CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryption') }})
    replication_server_instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServerInstanceType') }})
    replication_servers_security_groups_i_ds: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServersSecurityGroupsIDs') }})
    staging_area_subnet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaSubnetId') }})
    staging_area_tags: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaTags') }})
    use_dedicated_replication_server: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDedicatedReplicationServer') }})
    ebs_encryption_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryptionKeyArn') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateReplicationConfigurationTemplateRequest:
    headers: CreateReplicationConfigurationTemplateHeaders = field()
    request: CreateReplicationConfigurationTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateReplicationConfigurationTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    replication_configuration_template: Optional[shared.ReplicationConfigurationTemplate] = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
