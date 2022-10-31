from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UntagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UntagResourceRequestBody:
    resource_share_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArn' }})
    tag_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKeys' }})
    

@dataclass
class UntagResourceRequest:
    headers: UntagResourceHeaders = field(default=None)
    request: UntagResourceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UntagResourceResponse:
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    untag_resource_response: Optional[dict[str, Any]] = field(default=None)
    
