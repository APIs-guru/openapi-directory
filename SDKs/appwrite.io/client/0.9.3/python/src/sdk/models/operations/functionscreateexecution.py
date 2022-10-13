from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class FunctionsCreateExecutionPathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class FunctionsCreateExecutionRequestBody:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class FunctionsCreateExecutionSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsCreateExecutionRequest:
    path_params: FunctionsCreateExecutionPathParams = field(default=None)
    request: Optional[FunctionsCreateExecutionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FunctionsCreateExecutionSecurity = field(default=None)
    

@dataclass
class FunctionsCreateExecutionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    execution: Optional[shared.Execution] = field(default=None)
    
