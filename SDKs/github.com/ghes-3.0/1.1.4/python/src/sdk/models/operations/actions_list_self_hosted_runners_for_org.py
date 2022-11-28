from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListSelfHostedRunnersForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListSelfHostedRunnersForOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListSelfHostedRunnersForOrg200ApplicationJSON:
    runners: List[shared.Runner] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class ActionsListSelfHostedRunnersForOrgRequest:
    path_params: ActionsListSelfHostedRunnersForOrgPathParams = field()
    query_params: ActionsListSelfHostedRunnersForOrgQueryParams = field()
    

@dataclass
class ActionsListSelfHostedRunnersForOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    actions_list_self_hosted_runners_for_org_200_application_json_object: Optional[ActionsListSelfHostedRunnersForOrg200ApplicationJSON] = field(default=None)
    
