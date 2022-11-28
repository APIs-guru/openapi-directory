from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsCreateContentAttachmentPathParams:
    content_reference_id: int = field(metadata={'path_param': { 'field_name': 'content_reference_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsCreateContentAttachmentRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class AppsCreateContentAttachment415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class AppsCreateContentAttachmentRequest:
    path_params: AppsCreateContentAttachmentPathParams = field()
    request: Optional[AppsCreateContentAttachmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsCreateContentAttachmentResponse:
    content_type: str = field()
    status_code: int = field()
    apps_create_content_attachment_415_application_json_object: Optional[AppsCreateContentAttachment415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    content_reference_attachment: Optional[shared.ContentReferenceAttachment] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
