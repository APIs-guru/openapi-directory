from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListLongTermPricingXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_LONG_TERM_PRICING = "AWSIESnowballJobManagementService.ListLongTermPricing"


@dataclass
class ListLongTermPricingHeaders:
    x_amz_target: ListLongTermPricingXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListLongTermPricingRequest:
    headers: ListLongTermPricingHeaders = field()
    request: shared.ListLongTermPricingRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListLongTermPricingResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_resource_exception: Optional[Any] = field(default=None)
    list_long_term_pricing_result: Optional[shared.ListLongTermPricingResult] = field(default=None)
    
