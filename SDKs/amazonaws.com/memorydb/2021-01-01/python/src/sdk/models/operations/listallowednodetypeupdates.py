from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListAllowedNodeTypeUpdatesXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_LIST_ALLOWED_NODE_TYPE_UPDATES = "AmazonMemoryDB.ListAllowedNodeTypeUpdates"


@dataclass
class ListAllowedNodeTypeUpdatesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListAllowedNodeTypeUpdatesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAllowedNodeTypeUpdatesRequest:
    headers: ListAllowedNodeTypeUpdatesHeaders = field(default=None)
    request: shared.ListAllowedNodeTypeUpdatesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAllowedNodeTypeUpdatesResponse:
    cluster_not_found_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    list_allowed_node_type_updates_response: Optional[shared.ListAllowedNodeTypeUpdatesResponse] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
