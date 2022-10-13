from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AssociateResourceResourceTypeEnum(str, Enum):
    CFN_STACK = "CFN_STACK"


@dataclass
class AssociateResourcePathParams:
    application: str = field(default=None, metadata={'path_param': { 'field_name': 'application', 'style': 'simple', 'explode': False }})
    resource: str = field(default=None, metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    resource_type: AssociateResourceResourceTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class AssociateResourceRequest:
    path_params: AssociateResourcePathParams = field(default=None)
    headers: AssociateResourceHeaders = field(default=None)
    

@dataclass
class AssociateResourceResponse:
    associate_resource_response: Optional[shared.AssociateResourceResponse] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
