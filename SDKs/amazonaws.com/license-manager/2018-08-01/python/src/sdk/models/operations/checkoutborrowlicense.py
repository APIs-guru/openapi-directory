from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CheckoutBorrowLicenseXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_CHECKOUT_BORROW_LICENSE = "AWSLicenseManager.CheckoutBorrowLicense"


@dataclass
class CheckoutBorrowLicenseHeaders:
    x_amz_target: CheckoutBorrowLicenseXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckoutBorrowLicenseRequest:
    headers: CheckoutBorrowLicenseHeaders = field()
    request: shared.CheckoutBorrowLicenseRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckoutBorrowLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    authorization_exception: Optional[Any] = field(default=None)
    checkout_borrow_license_response: Optional[shared.CheckoutBorrowLicenseResponse] = field(default=None)
    entitlement_not_allowed_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    no_entitlements_allowed_exception: Optional[Any] = field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    redirect_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    unsupported_digital_signature_method_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
