from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposGetAllEnvironmentsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposGetAllEnvironments200ApplicationJSON:
    environments: Optional[List[shared.Environment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class ReposGetAllEnvironmentsRequest:
    path_params: ReposGetAllEnvironmentsPathParams = field()
    

@dataclass
class ReposGetAllEnvironmentsResponse:
    content_type: str = field()
    status_code: int = field()
    repos_get_all_environments_200_application_json_object: Optional[ReposGetAllEnvironments200ApplicationJSON] = field(default=None)
    
