from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsCreateWorkflowDispatchPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsCreateWorkflowDispatchRequestBody:
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    inputs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    

@dataclass
class ActionsCreateWorkflowDispatchRequest:
    path_params: ActionsCreateWorkflowDispatchPathParams = field()
    request: Optional[ActionsCreateWorkflowDispatchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateWorkflowDispatchResponse:
    content_type: str = field()
    status_code: int = field()
    
