from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EstimationAPIChangeStatusHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class EstimationAPIChangeStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    estimation_change_status_api_model: Optional[shared.EstimationChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    estimation_change_status_api_model1: Optional[shared.EstimationChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    estimation_change_status_api_model2: Optional[shared.EstimationChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class EstimationAPIChangeStatusRequest:
    headers: EstimationAPIChangeStatusHeaders = field()
    request: EstimationAPIChangeStatusRequests = field()
    

@dataclass
class EstimationAPIChangeStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    estimation_api_change_status_200_application_json_boolean: Optional[bool] = field(default=None)
    estimation_api_change_status_200_text_json_boolean: Optional[bool] = field(default=None)
    
