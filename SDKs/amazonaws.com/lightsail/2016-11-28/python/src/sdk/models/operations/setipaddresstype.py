from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SetIPAddressTypeXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_SET_IP_ADDRESS_TYPE = "Lightsail_20161128.SetIpAddressType"


@dataclass
class SetIPAddressTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SetIPAddressTypeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SetIPAddressTypeRequest:
    headers: SetIPAddressTypeHeaders = field(default=None)
    request: shared.SetIPAddressTypeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetIPAddressTypeResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    account_setup_in_progress_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    operation_failure_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    set_ip_address_type_result: Optional[shared.SetIPAddressTypeResult] = field(default=None)
    status_code: int = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
