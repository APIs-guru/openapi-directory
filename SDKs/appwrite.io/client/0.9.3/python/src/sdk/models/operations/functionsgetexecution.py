from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FunctionsGetExecutionPathParams:
    execution_id: str = field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsGetExecutionSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsGetExecutionRequest:
    path_params: FunctionsGetExecutionPathParams = field()
    security: FunctionsGetExecutionSecurity = field()
    

@dataclass
class FunctionsGetExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    execution: Optional[shared.Execution] = field(default=None)
    
