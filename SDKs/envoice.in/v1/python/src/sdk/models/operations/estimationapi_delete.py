from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EstimationAPIDeleteHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class EstimationAPIDeleteRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    estimation_delete_api_model: Optional[shared.EstimationDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    estimation_delete_api_model1: Optional[shared.EstimationDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    estimation_delete_api_model2: Optional[shared.EstimationDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class EstimationAPIDeleteRequest:
    headers: EstimationAPIDeleteHeaders = field(default=None)
    request: EstimationAPIDeleteRequests = field(default=None)
    

@dataclass
class EstimationAPIDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    estimation_api_delete_200_application_json_int32_integer: Optional[int] = field(default=None)
    estimation_api_delete_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
