from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePaymentMethodStrongPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentMethodStrongQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdatePaymentMethodStrongSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePaymentMethodStrongRequest:
    path_params: UpdatePaymentMethodStrongPathParams = field()
    query_params: UpdatePaymentMethodStrongQueryParams = field()
    request: shared.ItvUpdatePaymentStrongRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentMethodStrongSecurity = field()
    

@dataclass
class UpdatePaymentMethodStrongResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
