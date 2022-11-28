from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateWebHookPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateWebHookRequest:
    path_params: UpdateWebHookPathParams = field()
    security: UpdateWebHookSecurity = field()
    request: Optional[UpdateWebHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateWebHookResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
