from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountDeleteGuestPathParams:
    guest_id: int = field(metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteGuestRequest:
    path_params: AccountDeleteGuestPathParams = field()
    

@dataclass
class AccountDeleteGuestResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
