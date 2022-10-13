from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountDeleteGuestPathParams:
    guest_id: int = field(default=None, metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteGuestRequest:
    path_params: AccountDeleteGuestPathParams = field(default=None)
    

@dataclass
class AccountDeleteGuestResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
