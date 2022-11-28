from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListSelectedReposForOrgSecretPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListSelectedReposForOrgSecretQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListSelectedReposForOrgSecret200ApplicationJSON:
    repositories: List[shared.MinimalRepository] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class ActionsListSelectedReposForOrgSecretRequest:
    path_params: ActionsListSelectedReposForOrgSecretPathParams = field()
    query_params: ActionsListSelectedReposForOrgSecretQueryParams = field()
    

@dataclass
class ActionsListSelectedReposForOrgSecretResponse:
    content_type: str = field()
    status_code: int = field()
    actions_list_selected_repos_for_org_secret_200_application_json_object: Optional[ActionsListSelectedReposForOrgSecret200ApplicationJSON] = field(default=None)
    
