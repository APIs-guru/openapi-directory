from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateInstanceCustomHealthStatusXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"


@dataclass
class UpdateInstanceCustomHealthStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateInstanceCustomHealthStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateInstanceCustomHealthStatusRequest:
    headers: UpdateInstanceCustomHealthStatusHeaders = field(default=None)
    request: shared.UpdateInstanceCustomHealthStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateInstanceCustomHealthStatusResponse:
    content_type: str = field(default=None)
    custom_health_not_found: Optional[Any] = field(default=None)
    instance_not_found: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    service_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
