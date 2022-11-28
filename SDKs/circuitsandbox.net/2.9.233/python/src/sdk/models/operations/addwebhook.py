from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class AddWebHookRequestBodyFilterEnum(str, Enum):
    CONVERSATION_CREATE = "CONVERSATION.CREATE"
    CONVERSATION_UPDATE = "CONVERSATION.UPDATE"
    CONVERSATION_ADD_ITEM = "CONVERSATION.ADD_ITEM"
    CONVERSATION_UPDATE_ITEM = "CONVERSATION.UPDATE_ITEM"
    USER_INCOMING_CALL = "USER.INCOMING_CALL"
    USER_USER_UPDATED = "USER.USER_UPDATED"
    USER_USER_SETTING_UPDATED = "USER.USER_SETTING_UPDATED"
    USER_SUBMIT_FORM_DATA = "USER.SUBMIT_FORM_DATA"


@dataclass
class AddWebHookRequestBody:
    filter: List[AddWebHookRequestBodyFilterEnum] = field(metadata={'form': { 'field_name': 'filter' }})
    url: str = field(metadata={'form': { 'field_name': 'url' }})
    

@dataclass
class AddWebHookSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddWebHookRequest:
    request: AddWebHookRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddWebHookSecurity = field()
    

@dataclass
class AddWebHookResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
