from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePdfTemplateRequestBodyTemplateDocument:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    template_document_: str = field(default=None, metadata={'multipart_form': { 'field_name': 'template[document]' }})
    

@dataclass
class CreatePdfTemplateRequestBody:
    template_document_: CreatePdfTemplateRequestBodyTemplateDocument = field(default=None, metadata={'multipart_form': { 'file': True }})
    template_name_: str = field(default=None, metadata={'multipart_form': { 'field_name': 'template[name]' }})
    template_parent_folder_id_: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'template[parent_folder_id]' }})
    

@dataclass
class CreatePdfTemplateSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePdfTemplateRequest:
    request: CreatePdfTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: CreatePdfTemplateSecurity = field(default=None)
    
class CreatePdfTemplatePendingTemplateExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"


@dataclass_json
@dataclass
class CreatePdfTemplatePendingTemplate:
    allow_additional_properties: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_additional_properties' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    editable_submissions: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editable_submissions' }})
    expiration_interval: Optional[CreatePdfTemplatePendingTemplateExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_interval' }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_after' }})
    expire_submissions: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_submissions' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    public_submissions: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_submissions' }})
    public_web_form: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_web_form' }})
    redirect_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    slack_webhook_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_webhook_url' }})
    template_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_type' }})
    webhook_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_url' }})
    

@dataclass
class CreatePdfTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    pending_template: Optional[CreatePdfTemplatePendingTemplate] = field(default=None)
    
