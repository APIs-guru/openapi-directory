from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EstimationAPISendToClientHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class EstimationAPISendToClientRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    send_estimation_to_client_api_model: Optional[shared.SendEstimationToClientAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    send_estimation_to_client_api_model1: Optional[shared.SendEstimationToClientAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    send_estimation_to_client_api_model2: Optional[shared.SendEstimationToClientAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class EstimationAPISendToClientRequest:
    headers: EstimationAPISendToClientHeaders = field()
    request: EstimationAPISendToClientRequests = field()
    

@dataclass
class EstimationAPISendToClientResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    estimation_api_send_to_client_200_application_json_int32_integer: Optional[int] = field(default=None)
    estimation_api_send_to_client_200_text_json_int32_integer: Optional[int] = field(default=None)
    
