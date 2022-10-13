from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CopySnapshotXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_COPY_SNAPSHOT = "AmazonMemoryDB.CopySnapshot"


@dataclass
class CopySnapshotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CopySnapshotXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CopySnapshotRequest:
    headers: CopySnapshotHeaders = field(default=None)
    request: shared.CopySnapshotRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CopySnapshotResponse:
    content_type: str = field(default=None)
    copy_snapshot_response: Optional[shared.CopySnapshotResponse] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_snapshot_state_fault: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    snapshot_already_exists_fault: Optional[Any] = field(default=None)
    snapshot_not_found_fault: Optional[Any] = field(default=None)
    snapshot_quota_exceeded_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = field(default=None)
    
