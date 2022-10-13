from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApplicantsOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicantsOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicantsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ApplicantsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ApplicantsOneRequest:
    path_params: ApplicantsOnePathParams = field(default=None)
    query_params: ApplicantsOneQueryParams = field(default=None)
    headers: ApplicantsOneHeaders = field(default=None)
    security: ApplicantsOneSecurity = field(default=None)
    

@dataclass
class ApplicantsOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_applicant_response: Optional[shared.GetApplicantResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ApplicantsOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ApplicantsOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
