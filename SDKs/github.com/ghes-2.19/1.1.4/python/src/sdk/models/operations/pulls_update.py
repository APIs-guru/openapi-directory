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
class PullsUpdatePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsUpdateRequestBodyStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class PullsUpdateRequestBody:
    base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    maintainer_can_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintainer_can_modify') }})
    state: Optional[PullsUpdateRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class PullsUpdateRequest:
    path_params: PullsUpdatePathParams = field()
    request: Optional[PullsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request: Optional[shared.PullRequest] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
