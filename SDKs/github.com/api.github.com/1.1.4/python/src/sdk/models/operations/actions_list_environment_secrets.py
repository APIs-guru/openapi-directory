from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListEnvironmentSecretsPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListEnvironmentSecretsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListEnvironmentSecretsRequest:
    path_params: ActionsListEnvironmentSecretsPathParams = field(default=None)
    query_params: ActionsListEnvironmentSecretsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListEnvironmentSecrets200ApplicationJSON:
    secrets: List[shared.ActionsSecret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListEnvironmentSecretsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_environment_secrets_200_application_json_object: Optional[ActionsListEnvironmentSecrets200ApplicationJSON] = field(default=None)
    
