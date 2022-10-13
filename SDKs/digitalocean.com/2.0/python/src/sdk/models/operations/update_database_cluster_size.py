from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDatabaseClusterSizePathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDatabaseClusterSizeRequestBody:
    num_nodes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_nodes' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass
class UpdateDatabaseClusterSizeRequest:
    path_params: UpdateDatabaseClusterSizePathParams = field(default=None)
    request: UpdateDatabaseClusterSizeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateDatabaseClusterSize401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateDatabaseClusterSizeResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_database_cluster_size_401_application_json_object: Optional[UpdateDatabaseClusterSize401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
