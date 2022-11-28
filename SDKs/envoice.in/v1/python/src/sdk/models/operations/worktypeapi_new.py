from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WorkTypeAPINewHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class WorkTypeAPINewRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    work_type_create_api_model: Optional[shared.WorkTypeCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    work_type_create_api_model1: Optional[shared.WorkTypeCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    work_type_create_api_model2: Optional[shared.WorkTypeCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class WorkTypeAPINewRequest:
    headers: WorkTypeAPINewHeaders = field()
    request: WorkTypeAPINewRequests = field()
    

@dataclass
class WorkTypeAPINewResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    work_type_api_new_200_application_json_int32_integer: Optional[int] = field(default=None)
    work_type_api_new_200_text_json_int32_integer: Optional[int] = field(default=None)
    
