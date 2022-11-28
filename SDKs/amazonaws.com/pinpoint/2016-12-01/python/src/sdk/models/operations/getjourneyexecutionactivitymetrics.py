from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetJourneyExecutionActivityMetricsPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    journey_activity_id: str = field(metadata={'path_param': { 'field_name': 'journey-activity-id', 'style': 'simple', 'explode': False }})
    journey_id: str = field(metadata={'path_param': { 'field_name': 'journey-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJourneyExecutionActivityMetricsQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'next-token', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page-size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJourneyExecutionActivityMetricsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJourneyExecutionActivityMetricsRequest:
    headers: GetJourneyExecutionActivityMetricsHeaders = field()
    path_params: GetJourneyExecutionActivityMetricsPathParams = field()
    query_params: GetJourneyExecutionActivityMetricsQueryParams = field()
    

@dataclass
class GetJourneyExecutionActivityMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    get_journey_execution_activity_metrics_response: Optional[shared.GetJourneyExecutionActivityMetricsResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
