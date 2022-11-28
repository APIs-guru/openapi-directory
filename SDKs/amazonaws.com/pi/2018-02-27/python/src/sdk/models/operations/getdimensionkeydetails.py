from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetDimensionKeyDetailsXAmzTargetEnum(str, Enum):
    PERFORMANCE_INSIGHTSV20180227_GET_DIMENSION_KEY_DETAILS = "PerformanceInsightsv20180227.GetDimensionKeyDetails"


@dataclass
class GetDimensionKeyDetailsHeaders:
    x_amz_target: GetDimensionKeyDetailsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDimensionKeyDetailsRequest:
    headers: GetDimensionKeyDetailsHeaders = field()
    request: shared.GetDimensionKeyDetailsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDimensionKeyDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    get_dimension_key_details_response: Optional[shared.GetDimensionKeyDetailsResponse] = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    
