from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListOrgSecretsPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListOrgSecretsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListOrgSecrets200ApplicationJSON:
    secrets: List[shared.OrganizationActionsSecret] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class ActionsListOrgSecretsRequest:
    path_params: ActionsListOrgSecretsPathParams = field()
    query_params: ActionsListOrgSecretsQueryParams = field()
    

@dataclass
class ActionsListOrgSecretsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    actions_list_org_secrets_200_application_json_object: Optional[ActionsListOrgSecrets200ApplicationJSON] = field(default=None)
    
