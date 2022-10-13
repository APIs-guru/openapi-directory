from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TaxAPIUpdateHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class TaxAPIUpdateRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    tax_update_api_model: Optional[shared.TaxUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tax_update_api_model1: Optional[shared.TaxUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    tax_update_api_model2: Optional[shared.TaxUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TaxAPIUpdateRequest:
    headers: TaxAPIUpdateHeaders = field(default=None)
    request: TaxAPIUpdateRequests = field(default=None)
    

@dataclass
class TaxAPIUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
