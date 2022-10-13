from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsCreateContentAttachmentPathParams:
    content_reference_id: int = field(default=None, metadata={'path_param': { 'field_name': 'content_reference_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsCreateContentAttachmentRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class AppsCreateContentAttachmentRequest:
    path_params: AppsCreateContentAttachmentPathParams = field(default=None)
    request: Optional[AppsCreateContentAttachmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AppsCreateContentAttachment415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class AppsCreateContentAttachmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    apps_create_content_attachment_415_application_json_object: Optional[AppsCreateContentAttachment415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    content_reference_attachment: Optional[shared.ContentReferenceAttachment] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
