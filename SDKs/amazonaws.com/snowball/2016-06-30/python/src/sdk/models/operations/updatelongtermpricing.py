from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateLongTermPricingXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_LONG_TERM_PRICING = "AWSIESnowballJobManagementService.UpdateLongTermPricing"


@dataclass
class UpdateLongTermPricingHeaders:
    x_amz_target: UpdateLongTermPricingXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLongTermPricingRequest:
    headers: UpdateLongTermPricingHeaders = field()
    request: shared.UpdateLongTermPricingRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLongTermPricingResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_resource_exception: Optional[Any] = field(default=None)
    update_long_term_pricing_result: Optional[dict[str, Any]] = field(default=None)
    
