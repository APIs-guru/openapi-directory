from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountPostRequests:
    api_core_dto_accounting_user: Optional[shared.APICoreDtoAccountingUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_accounting_user1: Optional[shared.APICoreDtoAccountingUser] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_accounting_user2: Optional[shared.APICoreDtoAccountingUser] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AccountPostRequest:
    request: AccountPostRequests = field(default=None)
    

@dataclass
class AccountPostResponse:
    api_core_dto_accounting_user: Optional[shared.APICoreDtoAccountingUser] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
