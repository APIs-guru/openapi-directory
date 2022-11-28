from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListTemplatesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent_folder_id', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTemplatesSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class ListTemplatesTemplateExpirationIntervalEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"


@dataclass_json
@dataclass
class ListTemplatesTemplate:
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
    expiration_interval: Optional[ListTemplatesTemplateExpirationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_interval') }})
    expire_after: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_after') }})
    page_dimensions: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_dimensions') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    permanent_document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permanent_document_url') }})
    

@dataclass
class ListTemplatesRequest:
    query_params: ListTemplatesQueryParams = field()
    security: ListTemplatesSecurity = field()
    

@dataclass
class ListTemplatesResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    templates: Optional[List[ListTemplatesTemplate]] = field(default=None)
    
