from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyUsageLimitActionEnum(str, Enum):
    MODIFY_USAGE_LIMIT = "ModifyUsageLimit"

class GetModifyUsageLimitBreachActionEnum(str, Enum):
    LOG = "log"
    EMIT_METRIC = "emit-metric"
    DISABLE = "disable"

class GetModifyUsageLimitVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyUsageLimitQueryParams:
    action: GetModifyUsageLimitActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Amount', 'style': 'form', 'explode': True }})
    breach_action: Optional[GetModifyUsageLimitBreachActionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'BreachAction', 'style': 'form', 'explode': True }})
    usage_limit_id: str = field(default=None, metadata={'query_param': { 'field_name': 'UsageLimitId', 'style': 'form', 'explode': True }})
    version: GetModifyUsageLimitVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyUsageLimitHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyUsageLimitRequest:
    query_params: GetModifyUsageLimitQueryParams = field(default=None)
    headers: GetModifyUsageLimitHeaders = field(default=None)
    

@dataclass
class GetModifyUsageLimitResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
