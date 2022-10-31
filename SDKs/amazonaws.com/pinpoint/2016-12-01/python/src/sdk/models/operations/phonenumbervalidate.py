from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PhoneNumberValidateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PhoneNumberValidateRequestBodyNumberValidateRequest:
    iso_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsoCountryCode' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    

@dataclass_json
@dataclass
class PhoneNumberValidateRequestBody:
    number_validate_request: PhoneNumberValidateRequestBodyNumberValidateRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberValidateRequest' }})
    

@dataclass
class PhoneNumberValidateRequest:
    headers: PhoneNumberValidateHeaders = field(default=None)
    request: PhoneNumberValidateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PhoneNumberValidateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    phone_number_validate_response: Optional[shared.PhoneNumberValidateResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
