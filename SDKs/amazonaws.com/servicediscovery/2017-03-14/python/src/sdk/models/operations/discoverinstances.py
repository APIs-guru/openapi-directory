from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DiscoverInstancesXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_DISCOVER_INSTANCES = "Route53AutoNaming_v20170314.DiscoverInstances"


@dataclass
class DiscoverInstancesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DiscoverInstancesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscoverInstancesRequest:
    headers: DiscoverInstancesHeaders = field(default=None)
    request: shared.DiscoverInstancesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscoverInstancesResponse:
    content_type: str = field(default=None)
    discover_instances_response: Optional[shared.DiscoverInstancesResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    namespace_not_found: Optional[Any] = field(default=None)
    request_limit_exceeded: Optional[Any] = field(default=None)
    service_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
