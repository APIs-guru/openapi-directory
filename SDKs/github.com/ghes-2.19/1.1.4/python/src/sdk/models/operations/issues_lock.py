from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IssuesLockPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesLockRequestBodyLockReasonEnum(str, Enum):
    OFF_TOPIC = "off-topic"
    TOO_HEATED = "too heated"
    RESOLVED = "resolved"
    SPAM = "spam"


@dataclass_json
@dataclass
class IssuesLockRequestBody:
    lock_reason: Optional[IssuesLockRequestBodyLockReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock_reason') }})
    

@dataclass
class IssuesLockRequest:
    path_params: IssuesLockPathParams = field()
    request: Optional[IssuesLockRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesLockResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
