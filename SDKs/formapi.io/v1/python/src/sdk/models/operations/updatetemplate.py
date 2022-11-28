from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateTemplatePathParams:
    template_id: str = field(metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    
class UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"


@dataclass_json
@dataclass
class UpdateTemplateUpdateTemplateDataTemplateData:
    allow_additional_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_additional_properties') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editable_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editable_submissions') }})
    expiration_interval: Optional[UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_interval') }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_after') }})
    expire_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_submissions') }})
    footer_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer_html') }})
    header_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header_html') }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_submissions') }})
    public_web_form: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_web_form') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    scss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scss') }})
    slack_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack_webhook_url') }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_url') }})
    

@dataclass_json
@dataclass
class UpdateTemplateUpdateTemplateData:
    template: UpdateTemplateUpdateTemplateDataTemplateData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    

@dataclass
class UpdateTemplateSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class UpdateTemplateUpdateTemplateResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateTemplateUpdateTemplateResponse:
    status: UpdateTemplateUpdateTemplateResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateTemplateRequest:
    path_params: UpdateTemplatePathParams = field()
    request: UpdateTemplateUpdateTemplateData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTemplateSecurity = field()
    

@dataclass
class UpdateTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    update_template_response: Optional[UpdateTemplateUpdateTemplateResponse] = field(default=None)
    
