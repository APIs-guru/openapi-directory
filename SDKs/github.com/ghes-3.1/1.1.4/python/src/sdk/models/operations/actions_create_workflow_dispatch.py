from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsCreateWorkflowDispatchPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(default=None, metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsCreateWorkflowDispatchRequestBody:
    inputs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    

@dataclass
class ActionsCreateWorkflowDispatchRequest:
    path_params: ActionsCreateWorkflowDispatchPathParams = field(default=None)
    request: Optional[ActionsCreateWorkflowDispatchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateWorkflowDispatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
