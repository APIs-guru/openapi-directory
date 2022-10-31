from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateItemDraftHeaders:
    content_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Language', 'style': 'simple', 'explode': False }})
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateItemDraftSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateItemDraftRequest:
    headers: CreateItemDraftHeaders = field(default=None)
    request: Optional[shared.ItemDraft] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateItemDraftSecurity = field(default=None)
    

@dataclass
class CreateItemDraftResponse:
    content_type: str = field(default=None)
    item_draft_response: Optional[shared.ItemDraftResponse] = field(default=None)
    status_code: int = field(default=None)
    
