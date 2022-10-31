from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EstimationAPIChangeStatusHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class EstimationAPIChangeStatusRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    estimation_change_status_api_model: Optional[shared.EstimationChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    estimation_change_status_api_model1: Optional[shared.EstimationChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    estimation_change_status_api_model2: Optional[shared.EstimationChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class EstimationAPIChangeStatusRequest:
    headers: EstimationAPIChangeStatusHeaders = field(default=None)
    request: EstimationAPIChangeStatusRequests = field(default=None)
    

@dataclass
class EstimationAPIChangeStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    estimation_api_change_status_200_application_json_boolean: Optional[bool] = field(default=None)
    estimation_api_change_status_200_text_json_boolean: Optional[bool] = field(default=None)
    status_code: int = field(default=None)
    
