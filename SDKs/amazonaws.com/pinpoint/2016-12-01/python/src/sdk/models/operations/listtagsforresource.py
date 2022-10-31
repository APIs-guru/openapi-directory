from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListTagsForResourcePathParams:
    resource_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'resource-arn', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTagsForResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTagsForResourceRequest:
    path_params: ListTagsForResourcePathParams = field(default=None)
    headers: ListTagsForResourceHeaders = field(default=None)
    

@dataclass
class ListTagsForResourceResponse:
    content_type: str = field(default=None)
    list_tags_for_resource_response: Optional[shared.ListTagsForResourceResponse] = field(default=None)
    status_code: int = field(default=None)
    
