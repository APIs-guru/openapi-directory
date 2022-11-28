from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivateSaveOfferQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivateSaveOfferSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ActivateSaveOfferRequest:
    query_params: ActivateSaveOfferQueryParams = field()
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ActivateSaveOfferSecurity = field()
    

@dataclass
class ActivateSaveOfferResponse:
    content_type: str = field()
    status_code: int = field()
    
