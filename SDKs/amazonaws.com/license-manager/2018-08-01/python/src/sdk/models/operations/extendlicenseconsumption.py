from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ExtendLicenseConsumptionXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_EXTEND_LICENSE_CONSUMPTION = "AWSLicenseManager.ExtendLicenseConsumption"


@dataclass
class ExtendLicenseConsumptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ExtendLicenseConsumptionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtendLicenseConsumptionRequest:
    headers: ExtendLicenseConsumptionHeaders = field(default=None)
    request: shared.ExtendLicenseConsumptionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtendLicenseConsumptionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    authorization_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    extend_license_consumption_response: Optional[shared.ExtendLicenseConsumptionResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
