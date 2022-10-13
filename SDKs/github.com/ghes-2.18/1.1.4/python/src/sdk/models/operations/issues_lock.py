from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesLockPathParams:
    issue_number: int = field(default=None, metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesLockRequestBodyLockReasonEnum(str, Enum):
    OFF_TOPIC = "off-topic"
    TOO_HEATED = "too heated"
    RESOLVED = "resolved"
    SPAM = "spam"


@dataclass_json
@dataclass
class IssuesLockRequestBody:
    lock_reason: Optional[IssuesLockRequestBodyLockReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lock_reason' }})
    

@dataclass
class IssuesLockRequest:
    path_params: IssuesLockPathParams = field(default=None)
    request: Optional[IssuesLockRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesLockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
