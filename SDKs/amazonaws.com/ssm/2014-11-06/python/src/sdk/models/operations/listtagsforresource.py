from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListTagsForResourceXAmzTargetEnum(str, Enum):
    AMAZON_SSM_LIST_TAGS_FOR_RESOURCE = "AmazonSSM.ListTagsForResource"


@dataclass
class ListTagsForResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListTagsForResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTagsForResourceRequest:
    headers: ListTagsForResourceHeaders = field(default=None)
    request: shared.ListTagsForResourceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTagsForResourceResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_resource_id: Optional[Any] = field(default=None)
    invalid_resource_type: Optional[Any] = field(default=None)
    list_tags_for_resource_result: Optional[shared.ListTagsForResourceResult] = field(default=None)
    status_code: int = field(default=None)
    
