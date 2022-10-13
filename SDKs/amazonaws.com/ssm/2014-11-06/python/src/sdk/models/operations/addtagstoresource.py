from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddTagsToResourceXAmzTargetEnum(str, Enum):
    AMAZON_SSM_ADD_TAGS_TO_RESOURCE = "AmazonSSM.AddTagsToResource"


@dataclass
class AddTagsToResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddTagsToResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddTagsToResourceRequest:
    headers: AddTagsToResourceHeaders = field(default=None)
    request: shared.AddTagsToResourceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddTagsToResourceResponse:
    add_tags_to_resource_result: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_resource_id: Optional[Any] = field(default=None)
    invalid_resource_type: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_tags_error: Optional[Any] = field(default=None)
    too_many_updates: Optional[Any] = field(default=None)
    
