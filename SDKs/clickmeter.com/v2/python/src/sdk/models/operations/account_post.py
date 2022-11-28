from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_dto_accounting_user: Optional[shared.APICoreDtoAccountingUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_accounting_user1: Optional[shared.APICoreDtoAccountingUser] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_accounting_user2: Optional[shared.APICoreDtoAccountingUser] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AccountPostRequest:
    request: AccountPostRequests = field()
    

@dataclass
class AccountPostResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_user: Optional[shared.APICoreDtoAccountingUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
