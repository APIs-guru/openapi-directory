from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateOrUpdateEnvironmentPathParams:
    environment_name: str = field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateEnvironmentRequestBodyReviewers:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[shared.DeploymentReviewerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateEnvironmentRequestBody:
    deployment_branch_policy: Optional[shared.DeploymentBranchPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment_branch_policy') }})
    reviewers: Optional[List[ReposCreateOrUpdateEnvironmentRequestBodyReviewers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    wait_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_timer') }})
    

@dataclass
class ReposCreateOrUpdateEnvironmentRequest:
    path_params: ReposCreateOrUpdateEnvironmentPathParams = field()
    request: Optional[ReposCreateOrUpdateEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateOrUpdateEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    environment: Optional[shared.Environment] = field(default=None)
    
