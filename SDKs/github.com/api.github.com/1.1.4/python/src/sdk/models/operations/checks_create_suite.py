from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChecksCreateSuitePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChecksCreateSuiteRequestBody:
    head_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_sha' }})
    

@dataclass
class ChecksCreateSuiteRequest:
    path_params: ChecksCreateSuitePathParams = field(default=None)
    request: Optional[ChecksCreateSuiteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChecksCreateSuiteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_suite: Optional[shared.CheckSuite] = field(default=None)
    
