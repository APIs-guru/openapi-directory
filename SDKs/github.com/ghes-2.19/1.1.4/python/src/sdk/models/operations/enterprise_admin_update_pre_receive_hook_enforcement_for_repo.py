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
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    TESTING = "testing"


@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody:
    enforcement: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams = field()
    request: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    repository_pre_receive_hook: Optional[shared.RepositoryPreReceiveHook] = field(default=None)
    
