from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WorkTypeAPIDeleteHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class WorkTypeAPIDeleteRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    work_type_delete_api_model: Optional[shared.WorkTypeDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    work_type_delete_api_model1: Optional[shared.WorkTypeDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    work_type_delete_api_model2: Optional[shared.WorkTypeDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class WorkTypeAPIDeleteRequest:
    headers: WorkTypeAPIDeleteHeaders = field(default=None)
    request: WorkTypeAPIDeleteRequests = field(default=None)
    

@dataclass
class WorkTypeAPIDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    work_type_api_delete_200_application_json_int32_integer: Optional[int] = field(default=None)
    work_type_api_delete_200_text_json_int32_integer: Optional[int] = field(default=None)
    
