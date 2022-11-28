from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposDeletePagesSitePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposDeletePagesSite415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposDeletePagesSiteRequest:
    path_params: ReposDeletePagesSitePathParams = field()
    

@dataclass
class ReposDeletePagesSiteResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    repos_delete_pages_site_415_application_json_object: Optional[ReposDeletePagesSite415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
