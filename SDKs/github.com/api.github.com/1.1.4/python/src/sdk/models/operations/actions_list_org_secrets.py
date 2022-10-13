from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListOrgSecretsPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListOrgSecretsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListOrgSecretsRequest:
    path_params: ActionsListOrgSecretsPathParams = field(default=None)
    query_params: ActionsListOrgSecretsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListOrgSecrets200ApplicationJSON:
    secrets: List[shared.OrganizationActionsSecret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListOrgSecretsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_org_secrets_200_application_json_object: Optional[ActionsListOrgSecrets200ApplicationJSON] = field(default=None)
    
