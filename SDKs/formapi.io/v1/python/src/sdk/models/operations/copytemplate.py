from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CopyTemplatePathParams:
    template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CopyTemplateCopyTemplateData:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    

@dataclass
class CopyTemplateSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CopyTemplateRequest:
    path_params: CopyTemplatePathParams = field(default=None)
    request: Optional[CopyTemplateCopyTemplateData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CopyTemplateSecurity = field(default=None)
    
class CopyTemplateTemplateExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"


@dataclass_json
@dataclass
class CopyTemplateTemplate:
    allow_additional_properties: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_additional_properties' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_url' }})
    editable_submissions: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editable_submissions' }})
    expiration_interval: Optional[CopyTemplateTemplateExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_interval' }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_after' }})
    expire_submissions: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_submissions' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    page_dimensions: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_dimensions' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    permanent_document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permanent_document_url' }})
    public_submissions: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_submissions' }})
    public_web_form: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_web_form' }})
    redirect_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    slack_webhook_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_webhook_url' }})
    template_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_type' }})
    webhook_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_url' }})
    

@dataclass
class CopyTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    template: Optional[CopyTemplateTemplate] = field(default=None)
    
