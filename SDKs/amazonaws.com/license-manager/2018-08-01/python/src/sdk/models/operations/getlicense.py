from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetLicenseXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_GET_LICENSE = "AWSLicenseManager.GetLicense"


@dataclass
class GetLicenseHeaders:
    x_amz_target: GetLicenseXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLicenseRequest:
    headers: GetLicenseHeaders = field()
    request: shared.GetLicenseRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    authorization_exception: Optional[Any] = field(default=None)
    get_license_response: Optional[shared.GetLicenseResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
