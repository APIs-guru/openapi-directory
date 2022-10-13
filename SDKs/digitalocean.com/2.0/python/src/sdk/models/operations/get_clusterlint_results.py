from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetClusterlintResultsPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClusterlintResultsQueryParams:
    run_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'run_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetClusterlintResultsRequest:
    path_params: GetClusterlintResultsPathParams = field(default=None)
    query_params: GetClusterlintResultsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetClusterlintResults200ApplicationJSONDiagnosticsObject:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    

@dataclass_json
@dataclass
class GetClusterlintResults200ApplicationJSONDiagnostics:
    check_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_name' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    object: Optional[GetClusterlintResults200ApplicationJSONDiagnosticsObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    

@dataclass_json
@dataclass
class GetClusterlintResults200ApplicationJSON:
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    diagnostics: Optional[List[GetClusterlintResults200ApplicationJSONDiagnostics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnostics' }})
    requested_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_id' }})
    

@dataclass_json
@dataclass
class GetClusterlintResults401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetClusterlintResultsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_clusterlint_results_200_application_json_object: Optional[GetClusterlintResults200ApplicationJSON] = field(default=None)
    get_clusterlint_results_401_application_json_object: Optional[GetClusterlintResults401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
