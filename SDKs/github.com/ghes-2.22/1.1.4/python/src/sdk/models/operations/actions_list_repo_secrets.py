from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListRepoSecretsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListRepoSecretsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListRepoSecretsRequest:
    path_params: ActionsListRepoSecretsPathParams = field(default=None)
    query_params: ActionsListRepoSecretsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListRepoSecrets200ApplicationJSON:
    secrets: List[shared.ActionsSecret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListRepoSecretsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_repo_secrets_200_application_json_object: Optional[ActionsListRepoSecrets200ApplicationJSON] = field(default=None)
    
