from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AssociateResourceResourceTypeEnum(str, Enum):
    CFN_STACK = "CFN_STACK"


@dataclass
class AssociateResourcePathParams:
    application: str = field(metadata={'path_param': { 'field_name': 'application', 'style': 'simple', 'explode': False }})
    resource: str = field(metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    resource_type: AssociateResourceResourceTypeEnum = field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateResourceRequest:
    headers: AssociateResourceHeaders = field()
    path_params: AssociateResourcePathParams = field()
    

@dataclass
class AssociateResourceResponse:
    content_type: str = field()
    status_code: int = field()
    associate_resource_response: Optional[shared.AssociateResourceResponse] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    
