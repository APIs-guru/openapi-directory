from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsGetBySlugPathParams:
    app_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'app_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetBySlugRequest:
    path_params: AppsGetBySlugPathParams = field(default=None)
    

@dataclass_json
@dataclass
class AppsGetBySlug415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class AppsGetBySlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    apps_get_by_slug_415_application_json_object: Optional[AppsGetBySlug415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    integration: Optional[dict[str, Any]] = field(default=None)
    
