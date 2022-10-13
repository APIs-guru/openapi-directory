from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssociateAttributeGroupPathParams:
    application: str = field(default=None, metadata={'path_param': { 'field_name': 'application', 'style': 'simple', 'explode': False }})
    attribute_group: str = field(default=None, metadata={'path_param': { 'field_name': 'attributeGroup', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateAttributeGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class AssociateAttributeGroupRequest:
    path_params: AssociateAttributeGroupPathParams = field(default=None)
    headers: AssociateAttributeGroupHeaders = field(default=None)
    

@dataclass
class AssociateAttributeGroupResponse:
    associate_attribute_group_response: Optional[shared.AssociateAttributeGroupResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
