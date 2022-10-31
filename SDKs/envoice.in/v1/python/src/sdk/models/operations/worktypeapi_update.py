from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WorkTypeAPIUpdateHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class WorkTypeAPIUpdateRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    work_type_update_api_model: Optional[shared.WorkTypeUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    work_type_update_api_model1: Optional[shared.WorkTypeUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    work_type_update_api_model2: Optional[shared.WorkTypeUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class WorkTypeAPIUpdateRequest:
    headers: WorkTypeAPIUpdateHeaders = field(default=None)
    request: WorkTypeAPIUpdateRequests = field(default=None)
    

@dataclass
class WorkTypeAPIUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
