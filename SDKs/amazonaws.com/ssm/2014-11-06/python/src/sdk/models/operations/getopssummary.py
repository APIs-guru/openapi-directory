from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetOpsSummaryQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetOpsSummaryXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_OPS_SUMMARY = "AmazonSSM.GetOpsSummary"


@dataclass
class GetOpsSummaryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetOpsSummaryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOpsSummaryRequest:
    query_params: GetOpsSummaryQueryParams = field(default=None)
    headers: GetOpsSummaryHeaders = field(default=None)
    request: shared.GetOpsSummaryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOpsSummaryResponse:
    content_type: str = field(default=None)
    get_ops_summary_result: Optional[shared.GetOpsSummaryResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_aggregator_exception: Optional[Any] = field(default=None)
    invalid_filter: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    invalid_type_name_exception: Optional[Any] = field(default=None)
    resource_data_sync_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
