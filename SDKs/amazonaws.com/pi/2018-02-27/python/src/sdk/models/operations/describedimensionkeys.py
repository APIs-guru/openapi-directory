from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeDimensionKeysXAmzTargetEnum(str, Enum):
    PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS = "PerformanceInsightsv20180227.DescribeDimensionKeys"


@dataclass
class DescribeDimensionKeysHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeDimensionKeysXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeDimensionKeysRequest:
    headers: DescribeDimensionKeysHeaders = field(default=None)
    request: shared.DescribeDimensionKeysRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeDimensionKeysResponse:
    content_type: str = field(default=None)
    describe_dimension_keys_response: Optional[shared.DescribeDimensionKeysResponse] = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
