from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class TagResourcePathParams:
    resource_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'resource-arn', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TagResourceRequestBodyTagsModel:
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class TagResourceRequestBody:
    tags_model: TagResourceRequestBodyTagsModel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagsModel' }})
    

@dataclass
class TagResourceRequest:
    path_params: TagResourcePathParams = field(default=None)
    headers: TagResourceHeaders = field(default=None)
    request: TagResourceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
