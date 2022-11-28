from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RegisterInstanceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_REGISTER_INSTANCE = "Route53AutoNaming_v20170314.RegisterInstance"


@dataclass
class RegisterInstanceHeaders:
    x_amz_target: RegisterInstanceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterInstanceRequest:
    headers: RegisterInstanceHeaders = field()
    request: shared.RegisterInstanceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    duplicate_request: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    register_instance_response: Optional[shared.RegisterInstanceResponse] = field(default=None)
    resource_in_use: Optional[Any] = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    service_not_found: Optional[Any] = field(default=None)
    
