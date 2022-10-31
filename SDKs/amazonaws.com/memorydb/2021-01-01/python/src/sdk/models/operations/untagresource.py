from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UntagResourceXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_UNTAG_RESOURCE = "AmazonMemoryDB.UntagResource"


@dataclass
class UntagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UntagResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagResourceRequest:
    headers: UntagResourceHeaders = field(default=None)
    request: shared.UntagResourceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UntagResourceResponse:
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
    tag_not_found_fault: Optional[Any] = field(default=None)
    untag_resource_response: Optional[shared.UntagResourceResponse] = field(default=None)
    user_not_found_fault: Optional[Any] = field(default=None)
    
