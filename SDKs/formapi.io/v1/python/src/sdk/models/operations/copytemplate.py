from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CopyTemplatePathParams:
    template_id: str = field(metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CopyTemplateCopyTemplateData:
    parent_folder_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class CopyTemplateSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class CopyTemplateTemplateExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"


@dataclass_json
@dataclass
class CopyTemplateTemplate:
    allow_additional_properties: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_additional_properties') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editable_submissions: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('editable_submissions') }})
    expire_submissions: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_submissions') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_submissions: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_submissions') }})
    public_web_form: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_web_form') }})
    redirect_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    slack_webhook_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack_webhook_url') }})
    template_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_type') }})
    webhook_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_url') }})
    document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_url') }})
    expiration_interval: Optional[CopyTemplateTemplateExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_interval') }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_after') }})
    page_dimensions: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_dimensions') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    permanent_document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permanent_document_url') }})
    

@dataclass
class CopyTemplateRequest:
    path_params: CopyTemplatePathParams = field()
    security: CopyTemplateSecurity = field()
    request: Optional[CopyTemplateCopyTemplateData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CopyTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    template: Optional[CopyTemplateTemplate] = field(default=None)
    
