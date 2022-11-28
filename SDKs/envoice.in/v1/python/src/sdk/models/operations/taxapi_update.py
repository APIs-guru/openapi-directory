from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TaxAPIUpdateHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaxAPIUpdateRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    tax_update_api_model: Optional[shared.TaxUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tax_update_api_model1: Optional[shared.TaxUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    tax_update_api_model2: Optional[shared.TaxUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TaxAPIUpdateRequest:
    headers: TaxAPIUpdateHeaders = field()
    request: TaxAPIUpdateRequests = field()
    

@dataclass
class TaxAPIUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
