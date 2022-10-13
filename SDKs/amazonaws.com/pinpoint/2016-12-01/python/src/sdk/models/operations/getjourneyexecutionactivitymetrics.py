from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetJourneyExecutionActivityMetricsPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    journey_activity_id: str = field(default=None, metadata={'path_param': { 'field_name': 'journey-activity-id', 'style': 'simple', 'explode': False }})
    journey_id: str = field(default=None, metadata={'path_param': { 'field_name': 'journey-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJourneyExecutionActivityMetricsQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'next-token', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page-size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJourneyExecutionActivityMetricsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetJourneyExecutionActivityMetricsRequest:
    path_params: GetJourneyExecutionActivityMetricsPathParams = field(default=None)
    query_params: GetJourneyExecutionActivityMetricsQueryParams = field(default=None)
    headers: GetJourneyExecutionActivityMetricsHeaders = field(default=None)
    

@dataclass
class GetJourneyExecutionActivityMetricsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    get_journey_execution_activity_metrics_response: Optional[shared.GetJourneyExecutionActivityMetricsResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
