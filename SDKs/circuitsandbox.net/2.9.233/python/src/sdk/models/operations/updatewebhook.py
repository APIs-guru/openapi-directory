from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class UpdateWebHookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UpdateWebHookRequestBodyFilterEnum(str, Enum):
    CONVERSATION_CREATE = "CONVERSATION.CREATE"
    CONVERSATION_UPDATE = "CONVERSATION.UPDATE"
    CONVERSATION_ADD_ITEM = "CONVERSATION.ADD_ITEM"
    CONVERSATION_UPDATE_ITEM = "CONVERSATION.UPDATE_ITEM"
    USER_INCOMING_CALL = "USER.INCOMING_CALL"
    USER_USER_UPDATED = "USER.USER_UPDATED"
    USER_USER_SETTING_UPDATED = "USER.USER_SETTING_UPDATED"
    USER_SUBMIT_FORM_DATA = "USER.SUBMIT_FORM_DATA"


@dataclass
class UpdateWebHookRequestBody:
    filter: Optional[List[UpdateWebHookRequestBodyFilterEnum]] = field(default=None, metadata={'form': { 'field_name': 'filter' }})
    url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'url' }})
    

@dataclass
class UpdateWebHookSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateWebHookRequest:
    path_params: UpdateWebHookPathParams = field(default=None)
    request: Optional[UpdateWebHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWebHookSecurity = field(default=None)
    

@dataclass
class UpdateWebHookResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
