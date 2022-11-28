from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"

class CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnum(str, Enum):
    PDF = "pdf"
    HTML = "html"


@dataclass_json
@dataclass
class CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateData:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    allow_additional_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_additional_properties') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editable_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editable_submissions') }})
    expiration_interval: Optional[CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_interval') }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_after') }})
    expire_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_submissions') }})
    footer_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer_html') }})
    header_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header_html') }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    public_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_submissions') }})
    public_web_form: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_web_form') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    scss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scss') }})
    slack_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack_webhook_url') }})
    template_type: Optional[CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_type') }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_url') }})
    

@dataclass_json
@dataclass
class CreateHTMLTemplateCreateHTMLTemplateData:
    template: CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    

@dataclass
class CreateHTMLTemplateSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class CreateHTMLTemplatePendingTemplateExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"


@dataclass_json
@dataclass
class CreateHTMLTemplatePendingTemplate:
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
    expiration_interval: Optional[CreateHTMLTemplatePendingTemplateExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_interval') }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_after') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass
class CreateHTMLTemplateRequest:
    request: CreateHTMLTemplateCreateHTMLTemplateData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateHTMLTemplateSecurity = field()
    

@dataclass
class CreateHTMLTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    pending_template: Optional[CreateHTMLTemplatePendingTemplate] = field(default=None)
    
