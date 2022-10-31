from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreatePublicDNSNamespaceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_CREATE_PUBLIC_DNS_NAMESPACE = "Route53AutoNaming_v20170314.CreatePublicDnsNamespace"


@dataclass
class CreatePublicDNSNamespaceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreatePublicDNSNamespaceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePublicDNSNamespaceRequest:
    headers: CreatePublicDNSNamespaceHeaders = field(default=None)
    request: shared.CreatePublicDNSNamespaceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePublicDNSNamespaceResponse:
    content_type: str = field(default=None)
    create_public_dns_namespace_response: Optional[shared.CreatePublicDNSNamespaceResponse] = field(default=None)
    duplicate_request: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    namespace_already_exists: Optional[Any] = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
