from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"


@dataclass_json
@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    visibility: Optional[EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest:
    path_params: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams = field()
    request: Optional[EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    runner_groups_enterprise: Optional[shared.RunnerGroupsEnterprise] = field(default=None)
    
