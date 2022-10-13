from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RunClusterlintPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RunClusterlintRequestBody:
    exclude_checks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclude_checks' }})
    exclude_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclude_groups' }})
    include_checks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_checks' }})
    include_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_groups' }})
    

@dataclass
class RunClusterlintRequest:
    path_params: RunClusterlintPathParams = field(default=None)
    request: Optional[RunClusterlintRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class RunClusterlint401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class RunClusterlintResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    run_clusterlint_202_application_json_any: Optional[Any] = field(default=None)
    run_clusterlint_401_application_json_object: Optional[RunClusterlint401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
