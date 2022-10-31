from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateReplicationConfigurationTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum(str, Enum):
    PRIVATE_IP = "PRIVATE_IP"
    PUBLIC_IP = "PUBLIC_IP"

class UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum(str, Enum):
    GP2 = "GP2"
    ST1 = "ST1"

class UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class UpdateReplicationConfigurationTemplateRequestBody:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    associate_default_security_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associateDefaultSecurityGroup' }})
    bandwidth_throttling: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthThrottling' }})
    create_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createPublicIP' }})
    data_plane_routing: Optional[UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPlaneRouting' }})
    default_large_staging_disk_type: Optional[UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLargeStagingDiskType' }})
    ebs_encryption: Optional[UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebsEncryption' }})
    ebs_encryption_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebsEncryptionKeyArn' }})
    replication_configuration_template_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationConfigurationTemplateID' }})
    replication_server_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationServerInstanceType' }})
    replication_servers_security_groups_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationServersSecurityGroupsIDs' }})
    staging_area_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingAreaSubnetId' }})
    staging_area_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingAreaTags' }})
    use_dedicated_replication_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDedicatedReplicationServer' }})
    

@dataclass
class UpdateReplicationConfigurationTemplateRequest:
    headers: UpdateReplicationConfigurationTemplateHeaders = field(default=None)
    request: UpdateReplicationConfigurationTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateReplicationConfigurationTemplateResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    replication_configuration_template: Optional[shared.ReplicationConfigurationTemplate] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
