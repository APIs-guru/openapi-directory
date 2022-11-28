from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePaymentIntentStrongPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentIntentStrongQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdatePaymentIntentStrongSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePaymentIntentStrongRequest:
    path_params: UpdatePaymentIntentStrongPathParams = field()
    query_params: UpdatePaymentIntentStrongQueryParams = field()
    request: shared.ItvUpdateIntentStrongRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentIntentStrongSecurity = field()
    

@dataclass
class UpdatePaymentIntentStrongResponse:
    content_type: str = field()
    status_code: int = field()
    itv_update_intent_strong_response: Optional[shared.ItvUpdateIntentStrongResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
