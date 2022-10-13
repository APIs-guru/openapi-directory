from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ActivateSaveOfferQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivateSaveOfferSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ActivateSaveOfferRequest:
    query_params: ActivateSaveOfferQueryParams = field(default=None)
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ActivateSaveOfferSecurity = field(default=None)
    

@dataclass
class ActivateSaveOfferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
