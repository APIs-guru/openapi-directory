from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreatePrivateDNSNamespaceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_CREATE_PRIVATE_DNS_NAMESPACE = "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace"


@dataclass
class CreatePrivateDNSNamespaceHeaders:
    x_amz_target: CreatePrivateDNSNamespaceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePrivateDNSNamespaceRequest:
    headers: CreatePrivateDNSNamespaceHeaders = field()
    request: shared.CreatePrivateDNSNamespaceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePrivateDNSNamespaceResponse:
    content_type: str = field()
    status_code: int = field()
    create_private_dns_namespace_response: Optional[shared.CreatePrivateDNSNamespaceResponse] = field(default=None)
    duplicate_request: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    namespace_already_exists: Optional[Any] = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
