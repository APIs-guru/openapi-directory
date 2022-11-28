from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetDistributionLatestCacheResetXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_GET_DISTRIBUTION_LATEST_CACHE_RESET = "Lightsail_20161128.GetDistributionLatestCacheReset"


@dataclass
class GetDistributionLatestCacheResetHeaders:
    x_amz_target: GetDistributionLatestCacheResetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistributionLatestCacheResetRequest:
    headers: GetDistributionLatestCacheResetHeaders = field()
    request: shared.GetDistributionLatestCacheResetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDistributionLatestCacheResetResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    get_distribution_latest_cache_reset_result: Optional[shared.GetDistributionLatestCacheResetResult] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    operation_failure_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
