from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateTemplatePathParams:
    template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    
class UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"


@dataclass_json
@dataclass
class UpdateTemplateUpdateTemplateDataTemplateData:
    allow_additional_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_additional_properties' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    editable_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editable_submissions' }})
    expiration_interval: Optional[UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_interval' }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_after' }})
    expire_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_submissions' }})
    footer_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer_html' }})
    header_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header_html' }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_submissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_submissions' }})
    public_web_form: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_web_form' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    scss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scss' }})
    slack_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_webhook_url' }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_url' }})
    

@dataclass_json
@dataclass
class UpdateTemplateUpdateTemplateData:
    template: UpdateTemplateUpdateTemplateDataTemplateData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    

@dataclass
class UpdateTemplateSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTemplateRequest:
    path_params: UpdateTemplatePathParams = field(default=None)
    request: UpdateTemplateUpdateTemplateData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTemplateSecurity = field(default=None)
    
class UpdateTemplateUpdateTemplateResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateTemplateUpdateTemplateResponse:
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: UpdateTemplateUpdateTemplateResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UpdateTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_template_response: Optional[UpdateTemplateUpdateTemplateResponse] = field(default=None)
    
