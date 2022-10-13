from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateReplicationConfigurationTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
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
    associate_default_security_group: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associateDefaultSecurityGroup' }})
    bandwidth_throttling: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthThrottling' }})
    create_public_ip: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createPublicIP' }})
    data_plane_routing: CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPlaneRouting' }})
    default_large_staging_disk_type: CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLargeStagingDiskType' }})
    ebs_encryption: CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebsEncryption' }})
    ebs_encryption_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebsEncryptionKeyArn' }})
    replication_server_instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationServerInstanceType' }})
    replication_servers_security_groups_i_ds: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationServersSecurityGroupsIDs' }})
    staging_area_subnet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingAreaSubnetId' }})
    staging_area_tags: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingAreaTags' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    use_dedicated_replication_server: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDedicatedReplicationServer' }})
    

@dataclass
class CreateReplicationConfigurationTemplateRequest:
    headers: CreateReplicationConfigurationTemplateHeaders = field(default=None)
    request: CreateReplicationConfigurationTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateReplicationConfigurationTemplateResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    replication_configuration_template: Optional[shared.ReplicationConfigurationTemplate] = field(default=None)
    status_code: int = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
