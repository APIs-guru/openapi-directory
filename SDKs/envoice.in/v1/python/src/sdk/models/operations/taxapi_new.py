from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TaxAPINewHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaxAPINewRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    tax_create_api_model: Optional[shared.TaxCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tax_create_api_model1: Optional[shared.TaxCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    tax_create_api_model2: Optional[shared.TaxCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TaxAPINewRequest:
    headers: TaxAPINewHeaders = field(default=None)
    request: TaxAPINewRequests = field(default=None)
    

@dataclass
class TaxAPINewResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tax_api_new_200_application_json_int32_integer: Optional[int] = field(default=None)
    tax_api_new_200_text_json_int32_integer: Optional[int] = field(default=None)
    
