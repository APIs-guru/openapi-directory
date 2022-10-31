from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TagResourceXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_TAG_RESOURCE = "AmazonMemoryDB.TagResource"


@dataclass
class TagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: TagResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagResourceRequest:
    headers: TagResourceHeaders = field(default=None)
    request: shared.TagResourceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagResourceResponse:
    acl_not_found_fault: Optional[Any] = field(default=None)
    cluster_not_found_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_arn_fault: Optional[Any] = field(default=None)
    invalid_cluster_state_fault: Optional[Any] = field(default=None)
    parameter_group_not_found_fault: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    snapshot_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    subnet_group_not_found_fault: Optional[Any] = field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = field(default=None)
    tag_resource_response: Optional[shared.TagResourceResponse] = field(default=None)
    user_not_found_fault: Optional[Any] = field(default=None)
    
