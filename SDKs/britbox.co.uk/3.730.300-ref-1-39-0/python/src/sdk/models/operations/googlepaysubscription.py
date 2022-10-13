from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GooglePaySubscriptionQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GooglePaySubscriptionSecurity:
    profile_auth: shared.SchemeProfileAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GooglePaySubscriptionRequest:
    query_params: GooglePaySubscriptionQueryParams = field(default=None)
    request: shared.ItvGooglePaySubscriptionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GooglePaySubscriptionSecurity = field(default=None)
    

@dataclass
class GooglePaySubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
