from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CheckDomainAvailabilityXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_CHECK_DOMAIN_AVAILABILITY = "Route53Domains_v20140515.CheckDomainAvailability"


@dataclass
class CheckDomainAvailabilityHeaders:
    x_amz_target: CheckDomainAvailabilityXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckDomainAvailabilityRequest:
    headers: CheckDomainAvailabilityHeaders = field()
    request: shared.CheckDomainAvailabilityRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckDomainAvailabilityResponse:
    content_type: str = field()
    status_code: int = field()
    check_domain_availability_response: Optional[shared.CheckDomainAvailabilityResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    
