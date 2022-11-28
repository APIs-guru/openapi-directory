from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class FunctionsCreateExecutionPathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class FunctionsCreateExecutionRequestBody:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class FunctionsCreateExecutionSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsCreateExecutionRequest:
    path_params: FunctionsCreateExecutionPathParams = field()
    security: FunctionsCreateExecutionSecurity = field()
    request: Optional[FunctionsCreateExecutionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FunctionsCreateExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    execution: Optional[shared.Execution] = field(default=None)
    
