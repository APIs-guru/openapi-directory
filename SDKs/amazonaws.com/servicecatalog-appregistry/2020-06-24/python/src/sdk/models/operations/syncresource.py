from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SyncResourceResourceTypeEnum(str, Enum):
    CFN_STACK = "CFN_STACK"


@dataclass
class SyncResourcePathParams:
    resource: str = field(default=None, metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    resource_type: SyncResourceResourceTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class SyncResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class SyncResourceRequest:
    path_params: SyncResourcePathParams = field(default=None)
    headers: SyncResourceHeaders = field(default=None)
    

@dataclass
class SyncResourceResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    sync_resource_response: Optional[shared.SyncResourceResponse] = field(default=None)
    
