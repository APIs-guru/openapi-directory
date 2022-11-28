from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateItemDraftHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    content_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateItemDraftSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateItemDraftRequest:
    headers: CreateItemDraftHeaders = field()
    security: CreateItemDraftSecurity = field()
    request: Optional[shared.ItemDraft] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateItemDraftResponse:
    content_type: str = field()
    status_code: int = field()
    item_draft_response: Optional[shared.ItemDraftResponse] = field(default=None)
    
