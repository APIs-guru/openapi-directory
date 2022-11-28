from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsGetBySlugPathParams:
    app_slug: str = field(metadata={'path_param': { 'field_name': 'app_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsGetBySlug415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class AppsGetBySlugRequest:
    path_params: AppsGetBySlugPathParams = field()
    

@dataclass
class AppsGetBySlugResponse:
    content_type: str = field()
    status_code: int = field()
    apps_get_by_slug_415_application_json_object: Optional[AppsGetBySlug415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    integration: Optional[dict[str, Any]] = field(default=None)
    
