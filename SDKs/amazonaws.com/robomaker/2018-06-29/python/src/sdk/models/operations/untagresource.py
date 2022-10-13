from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UntagResourcePathParams:
    resource_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagResourceQueryParams:
    tag_keys: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagKeys', 'style': 'form', 'explode': True }})
    

@dataclass
class UntagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class UntagResourceRequest:
    path_params: UntagResourcePathParams = field(default=None)
    query_params: UntagResourceQueryParams = field(default=None)
    headers: UntagResourceHeaders = field(default=None)
    

@dataclass
class UntagResourceResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    untag_resource_response: Optional[dict[str, Any]] = field(default=None)
    
