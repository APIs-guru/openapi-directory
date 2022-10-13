from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateSnapshotXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_CREATE_SNAPSHOT = "AmazonMemoryDB.CreateSnapshot"


@dataclass
class CreateSnapshotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateSnapshotXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateSnapshotRequest:
    headers: CreateSnapshotHeaders = field(default=None)
    request: shared.CreateSnapshotRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSnapshotResponse:
    cluster_not_found_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_snapshot_response: Optional[shared.CreateSnapshotResponse] = field(default=None)
    invalid_cluster_state_fault: Optional[Any] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    snapshot_already_exists_fault: Optional[Any] = field(default=None)
    snapshot_quota_exceeded_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = field(default=None)
    
